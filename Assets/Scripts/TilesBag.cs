using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TilesBag : MonoBehaviour
{
    public List<BagSlot> slots = new();
    public List<BagSlot> BusySlots => slots.Where(b => b.Busy).ToList();
    public bool HaveEmptySlot => slots.Any(s => s.IsFree);
    public BagSlot EmptySlot => slots.FirstOrDefault(s => s.IsFree);
    public bool NoFreeSpace => !HaveEmptySlot;
    public event Action OnPut = delegate { };

    public  void Put (TileSlot tileSlot, BagSlot bagSlot)
    {
        tileSlot.PutInBag();
        bagSlot.Put(tileSlot);
        OnPut();
    }

    public void Remove(TileSlot slot)
    {
        var find = slots.FirstOrDefault(s => s.TileSlot == slot);
        if (find) find.Empty();
    }

}