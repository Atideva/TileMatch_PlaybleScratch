using System;
using System.Collections.Generic;
using UnityEngine;

[ExecuteAlways]
public class Tile : MonoBehaviour
{
    [Space(20)]
    public TileSO Type;
    public TileSO lastType;
    // public TileData Data;
    [Space(20)]
    public SpriteRenderer icon;
    public SpriteRenderer disabledTile;
    public SpriteRenderer background;
    public TrailRenderer trail;
    [Space(20)]
    public Vector3 defaultSize = Vector3.one;
    public float speed;
    public float spawnAnimSize = 1.5f;
    public float spawnAnimDuration = 0.3f;

    [Space(20)]
    public List<Tile> coverTiles = new();

    public int Layer { get; private set; }

    bool _isSpawnAnimation;
    float _spawnTimer = 0.0f;
    Vector3 _targetPosition;
    float _timer;
    bool _isMoving;
    TileSlot _targetSlot;
    public bool IsClickable => _isClickable && !_isMoving && !InBag;
    public bool _isClickable;

    public bool InBag { get; private set; }

    void Awake()
    {
        IsInit = false;
    }

    void RefreshEditor()
    {
        if (Application.isPlaying) return;
        if (lastType == Type) return;
        lastType = Type;
        Refresh(Type);
    }

    public void SetContacts(List<Tile> cover)
    {
        if (cover == null) return;
        coverTiles.Clear();
        coverTiles = cover;
        if (cover.Count > 0) Disable();
        else Enable();
    }

    int iconSort;
    int backGroundSort;
    int disabledSort;
    int trailSort;

    public void MoveTo(TileSlot slot)
    {
        trail.sortingOrder = 1000;
        background.sortingOrder = 1001;
        icon.sortingOrder = 1002;
        _targetSlot = slot;
        _targetPosition = slot.Position;
        _isMoving = true;
    }

    public event Action<Tile, TileSlot> OnMoveFinish = delegate { };
    public Vector2 Position => transform.position;
    public bool IsMoving => _isMoving;
    public float Y => transform.position.y;

    public void SetLayer(int layer, int lineID)
    {
        _line = lineID;
        Layer = layer;
        trailSort = Layer + _line ;
        backGroundSort = Layer + _line+1;
        iconSort = Layer + _line + 2;
        disabledSort = Layer + _line + 3;
        Refresh();
    }

    void Refresh()
    {
        trail.sortingOrder = trailSort;
        background.sortingOrder = backGroundSort;
        icon.sortingOrder = iconSort;
        disabledTile.sortingOrder = disabledSort;
    }

    void StopMove()
    {
        transform.position = _targetPosition;
        _isMoving = false;
        Refresh();
        OnMoveFinish(this, _targetSlot);
    }

    bool Arrive => Vector2.Distance(transform.position, _targetPosition) < 0.01f;

    void Update()
    {
        RefreshEditor();
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

    public void Set(TileSO so)
    {
        Refresh(so);
        Enable();
        IsInit = true;
    }

    void Refresh(TileSO so)
    {
        var soName = so ? so.name : "";
        gameObject.name = "Tile - " + soName;
        icon.sprite = so ? so.Icon : null;
    }

    public bool IsInit;
    int _line;

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
        gameObject.SetActive(false);
    }

    public void Show()
    {
        if (!Application.isPlaying) return;
        gameObject.SetActive(true);
    }

    public void Enable()
    {
        _isClickable = true;
        disabledTile.gameObject.SetActive(false);
    }

    public void Disable()
    {
        _isClickable = false;
        disabledTile.gameObject.SetActive(true);
    }
}