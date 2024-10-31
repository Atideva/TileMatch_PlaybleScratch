using System;
using System.Collections.Generic;
using System.Linq;
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
    [FormerlySerializedAs("isClickable")]
    [Space(20)]
    public bool locked;
    //  public bool isInit;
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

    #endregion

    #region Access

    public TileSO Type => type;
    public bool IsClickable => !locked && !_isMoving && !InBag;
    public bool InBag { get; private set; }
    public event Action<Tile, TileSlot> OnMoveFinish = delegate { };
    public Vector2 Position => transform.position;
    public bool IsMoving => _isMoving;
    public float Y => transform.position.y;
    public float X => transform.position.x;
    bool Arrive => Vector2.Distance(transform.position, _targetPosition) < 0.01f;

    #endregion

    void OnTriggerEnter2D(Collider2D other)
    {
        if (_isMoving) return;

        // if (debug)
        Debug.LogWarning("Contact: " + gameObject.name, gameObject);

        var tile = _game.Find(other.transform);
        if (!tile) return;
        if (tile._isMoving) return;

        if (tile.layer <= layer) return;
        if (coverTiles.Contains(tile)) return;
        coverTiles.Add(tile);
        RefreshLock();
    }

    void OnTriggerExit2D(Collider2D other)
    {
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

    void RefreshEditor()
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
        trail.sortingOrder = 1000;
        background.sortingOrder = 1001;
        icon.sortingOrder = 1002;
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

    public float lockAlpha = 0.3f;

    void Update()
    {
        RefreshEditor();
        if (_isFading)
        {
            currentAlpha += fadeSpeed * Time.deltaTime;
            SetAlpha(currentAlpha);

            if (currentAlpha <= 0) _isFading = false;
            if (currentAlpha >= lockAlpha) _isFading = false;
        }

        if (_isMoving)
        {
            //  Debug.LogError("Moving to: " + _targetPosition);
            transform.position = Vector3.MoveTowards(Position, _targetPosition, speed * Time.deltaTime);
            if (Arrive)
                StopMove();
        }

        if (_isSpawnAnimation)
        {
            _spawnTimer += Time.deltaTime;
            var progress = _spawnTimer / spawnAnimDuration;

            if (progress <= 0.5f)
            {
                var scale = Mathf.Lerp(0, spawnAnimSize, progress * 2);
                transform.localScale = defaultSize * scale;
            }
            else if (progress <= 1.0f)
            {
                var scale = Mathf.Lerp(spawnAnimSize, 1, (progress - 0.5f) * 2);
                transform.localScale = defaultSize * scale;
            }
            else
            {
                transform.localScale = defaultSize;
                _isSpawnAnimation = false;
            }
        }
    }

    public float fadeDuration = 1f;
    float _fadeTimer;
    bool _isFading;
    float _fadeFrom;
    float _fadeTo;
    float fadeSpeed = 1;
    float currentAlpha;

    void SetAlpha(float alpha)
    {
        Debug.Log(alpha);
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

    public void SpawnAnimation()
    {
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

    public bool debug;
    Game _game;

    public void Unlock()
    {
        if (!locked) return;
        // if (debug)
        Debug.LogWarning("Unlock: " + name, gameObject);
        locked = false;
        // 
        HideLockedImage();
    }

    public void Lock()
    {
        if (locked) return;
        //if (debug)
        Debug.LogWarning("Lock: " + name, gameObject);
        locked = true;
        lockTile.gameObject.SetActive(true);
        ShowLockedImage();
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