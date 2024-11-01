using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TileMovement : MonoBehaviour
{
    public float speed = 20;
    public bool _isMoving;
    Tile _tile;
    TileSlot _targetSlot;
    Vector3 Destination => _targetSlot.Position;
    bool HasArrive => Vector2.Distance(Position, Destination) < 0.01f;
    Vector2 Position => _tile.Position;
    public event Action<TileSlot> OnMoveFinish = delegate { };

    public void SetTile(Tile tile)
    {
        _tile = tile;
    }

    public void MoveTo(TileSlot slot)
    {
        _targetSlot = slot;
        _tile.trail.sortingOrder = 10000;
        _tile.background.sortingOrder = 10001;
        _tile.icon.sortingOrder = 10002;
        _isMoving = true;
    }

    void Update()
    {
        if (!_isMoving) return;

        _tile.transform.position = Vector3.MoveTowards(Position, Destination, speed * Time.deltaTime);
        if (HasArrive)
            StopMove();
    }

    void StopMove()
    {
        _tile.transform.position = Destination;
        _isMoving = false;
        OnMoveFinish(_targetSlot);
    }

}