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
    [SerializeField] Box box;
    [SerializeField] TileMovement movement;
    [FormerlySerializedAs("fadeAnim")] [SerializeField] TileLockAnimation lockAnim;
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
    float _timer;
    bool _isMoving => movement._isMoving;
    float _fadeTimer;
    float _fadeFrom;
    float _fadeTo;
    float fadeSpeed = 1;

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

    #endregion

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

    public event Action OnMoveStart = delegate { };

    public void MoveTo(TileSlot slot)
    {
        OnMoveStart();
        movement.MoveTo(slot);
        movement.OnMoveFinish += MovementFinished;
    }

    void MovementFinished(TileSlot toSlot)
    {
        Refresh();
        OnMoveFinish(this, toSlot);
    }

    public void SetGame(Game game)
    {
        _game = game;
    }

    public void SetLayer(int l, int lineID)
    {
        movement.SetTile(this);
        lockAnim.SetTile(this);
        
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

    void Update()
    {
        RefreshInEditor();
    }

    void Refresh(TileSO so)
    {
        var soName = so ? so.name : "";
        gameObject.name = "Tile - " + soName;
        icon.sprite = so ? so.Icon : null;
    }

    public AnimationScale spawnAnim;

    public void SpawnAnimation()
    {
        spawnAnim.Play(transform);
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

        lockAnim.Unlock();
        if (debug) Debug.Log("Unlock: " + name, gameObject);
    }

    void Lock()
    {
        if (locked) return;
        locked = true;

        lockTile.gameObject.SetActive(true);
        lockAnim.Lock();
        if (debug) Debug.Log("Lock: " + name, gameObject);
    }

}