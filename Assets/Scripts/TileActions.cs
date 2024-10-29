using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using static Luna.Unity.Analytics;

public class TileActions : GameComponent
{
    List<Tile> _slots;
    Camera _cam;

    protected override void OnInit()
    {
        _cam = Camera.main;
        if (Application.isPlaying)
        {
//            Debug.LogError("INITED");
            Game.Input.OnTouchScreen += OnTouchScreen;
        }
    }

    bool isDisable;

    public void Disable()
    {
        isDisable = true;
    }

    void OnTouchScreen(Vector2 touchPos, float touchSize)
    {
//        Debug.LogError("TOUCHED");
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
        if (isDisable) return;
        Click(tile);
    }

    int clicks;
    public event Action<Tile> OnMoveStart = delegate { };

    void Click(Tile tile)
    {
        clicks++;
        LogEvent("Tile clicked", clicks);

        if (Game.Bag.NoSpace) return;

        var empty = Game.Bag.EmptySlot;
        Game.Bag.Put(tile, empty);

        OnMoveStart(tile);
        tile.OnMoveFinish += MoveFinished;
    }

    public void Observe(List<Tile> tiles)
    {
        _slots = tiles;
    }

    public event Action OnMoveFinish = delegate { };

    void MoveFinished(Tile moving, TileSlot tileSlot)
    {
        Debug.Log("Move finished: " + moving.Type.name, moving.gameObject);
        moving.OnMoveFinish -= MoveFinished;
        OnMoveFinish();
    }

}