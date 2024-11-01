using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using static Luna.Unity.Analytics;

public class TileActions : GameComponent
{
    List<Tile> _slots;
    Camera _cam;
    int _clicks;
    bool _isDisable;
    public event Action OnMoveFinish = delegate { };
    public event Action<Tile> OnMoveStart = delegate { };
    protected override void OnInit()
    {
        _cam = Camera.main;
        if (Application.isPlaying)
            Game.Input.OnTouchScreen += OnTouchScreen;
    }


    public void Disable()
    {
        _isDisable = true;
    }

    void OnTouchScreen(Vector2 touchPos, float touchSize)
    {
        var pos = _cam.ScreenToWorldPoint(touchPos);

        var clickable = _slots.Where(s => s.IsClickable);
        foreach (var slot in clickable)
        {
            var dist = Vector2.Distance(pos, slot.Position);
            if (dist > touchSize) continue;
            Touched(slot);
            return;
        }
    }

    void Touched(Tile tile)
    {
        if (_isDisable) return;
        Click(tile);
    }

    void Click(Tile tile)
    {
        _clicks++;
        LogEvent("Tile clicked", _clicks);

        if (Game.Bag.NoSpace) return;

        var empty = Game.Bag.GetSlotFor(tile);
        Game.Bag.Put(tile, empty);

        OnMoveStart(tile);
        tile.OnMoveFinish += MoveFinished;
    }

    public void Observe(List<Tile> tiles)
    {
        _slots = tiles;
    }

    void MoveFinished(Tile moving, TileSlot tileSlot)
    {
        Debug.Log("Move finished: " + moving.Type.name, moving.gameObject);
        moving.OnMoveFinish -= MoveFinished;
        OnMoveFinish();
    }

}