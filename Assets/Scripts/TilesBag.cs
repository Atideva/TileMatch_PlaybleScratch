using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TilesBag : MonoBehaviour
{
    public List<TileSlot> slots = new();
    public TileSlot LeftFrom(TileSlot slot) => slot.ID <= 0 ? null : slots[slot.ID - 1];
    public List<TileSlot> BusySlots => slots.Where(b => b.Busy).ToList();
    public bool HaveEmptySlot => slots.Any(s => s.IsEmpty);
    public TileSlot EmptySlot => slots.FirstOrDefault(s => s.IsEmpty);
    public bool NoSpace => !HaveEmptySlot;
    public event Action OnPut = delegate { };
    public event Action OnRemove = delegate { };

    void Awake()
    {
        for (var i = 0; i < slots.Count; i++)
            slots[i].ID = i;
    }

    public void Put(Tile tile, TileSlot tileSlot)
    {
        tile.PutInBag();
        tileSlot.Put(tile);
        OnPut();
    }

    public void Move(TileSlot from, TileSlot to)
    {
        var tile = from.Tile;
        from.Empty();
        to.Put(tile);
    }

    public void Empty(TileSlot slot)
    {
        slot.Empty();
        OnRemove();
    }


}