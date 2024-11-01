using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

[ExecuteAlways]
public class Tile : MonoBehaviour
{

    #region Inspector

    [FormerlySerializedAs("Type")]
    [Space(20)]
    [SerializeField] TileSO type;
   
    [Space(20)]
    public int layer;
    public int line;
   
    [Space(20)]
    public SpriteRenderer icon;
    public SpriteRenderer lockTile;
    public SpriteRenderer background;
   
    public TrailRenderer trail;
    [Space(20)]
    public Vector3 defaultSize = Vector3.one;
    public float speed;
    public float spawnAnimSize = 1.5f;
    public float spawnAnimDuration = 0.3f;
    public float lockAlpha = 0.3f;
    public float fadeDuration = 1f;

    [Space(20)]
    public bool customColissionBox;
    [SerializeField] Box box;

   
    [FormerlySerializedAs("isClickable")]
    [Space(20)]
    public bool locked;
    public bool isHidden;
    [SerializeField] int iconSort;
    [SerializeField] int backGroundSort;
    [SerializeField] int disabledSort;
    [SerializeField] int trailSort;
    [SerializeField] List<Tile> coverTiles = new();

    #endregion

 

    #region Variables

    TileSO _lastType;
    bool _isSpawnAnimation;
    float _spawnTimer;
    Vector3 _targetPosition;
    float _timer;
    bool _isMoving;
    TileSlot _targetSlot;
    float _fadeTimer;
    bool _isFading;
    float _fadeFrom;
    float _fadeTo;
    float fadeSpeed = 1;
    float currentAlpha;
    public bool debug;
    Game _game;
    #endregion

    #region Access
    public Box Box => new(Position + box.Position, box.Width, box.Height);
    public TileSO Type => type;
    public bool IsClickable => !locked && !_isMoving && !InBag;
    public bool InBag { get; private set; }
    public event Action<Tile, TileSlot> OnMoveFinish = delegate { };
    public Vector2 Position => transform.position;
    public bool IsMoving => _isMoving;
    public bool CanCover => !IsMoving && !InBag;
    public float Y => transform.position.y;
    public float X => transform.position.x;
    bool HasArrive => Vector2.Distance(transform.position, _targetPosition) < 0.01f;

    #endregion

    void OnTriggerEnter2D(Collider2D other)
    {
        if (customColissionBox) return;
        if (_isMoving) return;

        if (debug)
            Debug.Log("Contact: " + gameObject.name, gameObject);

        var collideTile = _game.Find(other.transform);
        if (!collideTile) return;
        if (collideTile._isMoving) return;

        if (collideTile.layer <= layer) return;
        if (coverTiles.Contains(collideTile)) return;
        coverTiles.Add(collideTile);
        RefreshLock();
    }

    void OnTriggerStay2D(Collider2D other)
    {
        if (customColissionBox) return;

        OnTriggerEnter2D(other);
    }

    void OnTriggerExit2D(Collider2D other)
    {
        if (customColissionBox) return;

        var tile = _game.Find(other.transform);
        if (!tile) return;
        if (!coverTiles.Contains(tile)) return;
        coverTiles.Remove(tile);
        RefreshLock();
    }

    void RefreshLock()
    {
        if (coverTiles.Count > 0) Lock();
        else Unlock();
    }
 
    void RefreshInEditor()
    {
        if (Application.isPlaying) return;
        if (_lastType == type) return;
        _lastType = type;
        Refresh(type);
    }

    public void SetContacts(List<Tile> covers)
    {
        if (covers == null) return;
        coverTiles = covers;
        RefreshLock();
    }

    public void MoveTo(TileSlot slot)
    {
        trail.sortingOrder = 10000;
        background.sortingOrder = 10001;
        icon.sortingOrder = 10002;
        _targetSlot = slot;
        _targetPosition = slot.Position;
        _isMoving = true;
    }

    public void SetGame(Game game)
    {
        _game = game;
    }

    public void SetLayer(int l, int lineID)
    {
        line = lineID;
        layer = l;
        trailSort = layer + line;
        backGroundSort = layer + line + 1;
        iconSort = layer + line + 2;
        disabledSort = layer + line + 3;
        Refresh();
    }

    void Refresh()
    {
        trail.sortingOrder = trailSort;
        background.sortingOrder = backGroundSort;
        icon.sortingOrder = iconSort;
        lockTile.sortingOrder = disabledSort;
    }

    void StopMove()
    {
        transform.position = _targetPosition;
        _isMoving = false;
        Refresh();
        OnMoveFinish(this, _targetSlot);
    }

    void Update()
    {
        RefreshInEditor();
        UpdateFading();
        UpdateMovement();
        UpdateSpawnAnimation();
    }

    void UpdateSpawnAnimation()
    {
        if (!_isSpawnAnimation) return;

        _spawnTimer += Time.deltaTime;
        var progress = _spawnTimer / spawnAnimDuration;

        switch (progress)
        {
            case <= 0.5f:
            {
                var scale = Mathf.Lerp(0, spawnAnimSize, progress * 2);
                transform.localScale = defaultSize * scale;
                break;
            }
            case <= 1.0f:
            {
                var scale = Mathf.Lerp(spawnAnimSize, 1, (progress - 0.5f) * 2);
                transform.localScale = defaultSize * scale;
                break;
            }
            default:
                transform.localScale = defaultSize;
                _isSpawnAnimation = false;
                break;
        }
    }

    void UpdateFading()
    {
        if (!_isFading) return;

        currentAlpha += fadeSpeed * Time.deltaTime;
        SetAlpha(currentAlpha);

        if (currentAlpha <= 0) _isFading = false;
        if (currentAlpha >= lockAlpha) _isFading = false;
    }

    void UpdateMovement()
    {
        if (!_isMoving) return;

        transform.position = Vector3.MoveTowards(Position, _targetPosition, speed * Time.deltaTime);
        if (HasArrive)
            StopMove();
    }

    void SetAlpha(float alpha)
    {
        var color = lockTile.color;
        color.a = alpha;
        lockTile.color = color;
    }

    void Refresh(TileSO so)
    {
        var soName = so ? so.name : "";
        gameObject.name = "Tile - " + soName;
        icon.sprite = so ? so.Icon : null;
    }

    public AppearAnimation spawnAnim;
    public void SpawnAnimation()
    {
        spawnAnim.Play();
        transform.localScale = Vector3.zero;
        _isSpawnAnimation = true;
        Show();
    }

    public void PutInBag()
    {
        InBag = true;
    }

    public void Hide()
    {
        if (!Application.isPlaying) return;
        if (debug) Debug.Log(name + " - hide");
        isHidden = true;
        gameObject.SetActive(false);
    }

    public void Show()
    {
        if (!Application.isPlaying) return;
        if (debug) Debug.Log(name + " - show");
        isHidden = false;
        gameObject.SetActive(true);
    }

    public void Unlock()
    {
        if (!locked) return;
        locked = false;

        HideLockedImage();
        if (debug) Debug.Log("Unlock: " + name, gameObject);
    }

    void Lock()
    {
        if (locked) return;
        locked = true;

        lockTile.gameObject.SetActive(true);
        ShowLockedImage();
        if (debug) Debug.Log("Lock: " + name, gameObject);
    }

    void HideLockedImage()
    {
        currentAlpha = lockAlpha;
        fadeSpeed = -lockAlpha / fadeDuration;
        _isFading = true;
    }

    void ShowLockedImage()
    {
        currentAlpha = 0;
        fadeSpeed = lockAlpha / fadeDuration;
        _isFading = true;
    }
}