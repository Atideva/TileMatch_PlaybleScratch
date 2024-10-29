using System;
using UnityEngine;
using UnityEngine.Serialization;

public class TileSlot : MonoBehaviour
{
    public int Layer { get; private set; }
    public SpriteRenderer background;
    public Vector3 defaultSize = Vector3.one;
    public float speed;
    public float spawnAnimSize = 1.5f;
    public float spawnAnimDuration = 0.3f;
    public float moveDuration = 0.5f;
    bool _isSpawnAnimation;
    float _spawnTimer = 0.0f;
    Vector3 _targetPosition;
    float _timer;
    bool _isMoving;
    BagSlot _targetSlot;
    public bool IsClickable => Tile && Tile.IsClickable;
    public bool IsFree => !Tile;
    public Tile Tile { get; private set; }
    public TileData Data => Tile.Data;

    public void MoveToPosition(BagSlot slot)
    {
        Tile.icon.sortingOrder = 1000;
        background.sortingOrder = 1000;
        _targetSlot = slot;
        // Set up the movement
        _targetPosition = slot.Position;
        var distance = Vector2.Distance(Position, _targetPosition);
        // speed = distance / moveDuration; // Calculate the speed based on the distance and duration
        _isMoving = true; // Start moving
    }

    public event Action<TileSlot, BagSlot> OnMoveFinish = delegate { };
    public Vector2 Position => transform.position;

    public void Init(int id)
    {
        Layer = id;
        background.sortingOrder = Layer;
        if (!Application.isPlaying) return;
        //debugBackground.gameObject.SetActive(false);
    }

    void Update()
    {
        if (_isMoving)
        {
            transform.position = Vector3.MoveTowards(Position, _targetPosition, speed * Time.deltaTime);
            if (Vector3.Distance(transform.position, _targetPosition) < 0.01f)
            {
                transform.position = _targetPosition;
                _isMoving = false;
                Tile.icon.sortingOrder = 0;
                background.sortingOrder = 0;
                OnMoveFinish(this, _targetSlot);
            }
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

    public void Put(Tile put)
    {
        Tile = put;
        Tile.icon.sortingOrder = Layer + 1;
        Tile.disabledTile.sortingOrder = Layer + 2;
        Tile.SetSlot(this);
    }

    public void SpawnAnimation()
    {
        transform.localScale = Vector3.zero;
        _isSpawnAnimation = true;
        Show();
    }

    public bool InBag { get; private set; }

    public void PutInBag()
    {
        InBag = true;
    }

    public void Empty()
    {
        Tile = null;
    }

    public void Hide()
    {
        gameObject.SetActive(false);
    }

    public void Show()
    {
        gameObject.SetActive(true);
    }
}