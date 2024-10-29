using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileActions : GameComponent
{
    List<TileSlot> _slots;
    public Camera _cam;

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

    void Touched(TileSlot slot)
    {
        Click(slot.Tile);
    }

    public void Observe(List<TileSlot> tiles)
    {
        _slots = tiles;
    }

    void Click(Tile tile)
    {
        Debug.Log(tile.icon.sprite.name + " clicked");
        if (tile.Slot.InBag) return;

        var bag = Game.Bag;
        if (!bag.HaveEmptySlot) return;

        var slot = tile.Slot;
        var bagSlot = bag.EmptySlot;
        bagSlot.Book(slot);

        slot.MoveToPosition(bagSlot);
        slot.OnMoveFinish += PutBag;
    }

    void PutBag(TileSlot moving, BagSlot bagSlot)
    {
        Debug.Log("Move finished");

        moving.OnMoveFinish -= PutBag;
        Game.Bag.Put(moving, bagSlot);
    }

}