using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileActions : GameComponent
{
    List<Tile> _slots;
      Camera _cam;

    protected override void OnInit()
    {
        _cam = Camera.main;
        Game.Input.OnTouchScreen += OnTouchScreen;
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
            break;
        }
    }

    void Touched(Tile tile)
    {
        Click(tile);
    }

    void Click(Tile tile)
    {
        Debug.Log("Click: " + tile.Data.tile.name);
        if (tile.InBag) return;
        if (Game.Bag.NoSpace) return;

        var empty = Game.Bag.EmptySlot;
        empty.Put(tile);
       
        tile.OnMoveFinish += PutBag;
    }

    public void Observe(List<Tile> tiles)
    {
        _slots = tiles;
    }

    void PutBag(Tile moving, TileSlot tileSlot)
    {
        Debug.Log("Move finished");

        moving.OnMoveFinish -= PutBag;
        Game.Bag.Put(moving, tileSlot);
    }

}