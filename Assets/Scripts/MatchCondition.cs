using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class MatchCondition : GameComponent
{
    public event Action<List<BagSlot>> OnMatch = delegate { };
    public List<TileSlot> completeSlots = new();
    public int Completed => completeSlots.Count;

    protected override void OnInit()
    {
        Game.Bag.OnPut += Check;
    }

    void Check()
    {
        var bag = Game.Bag;
        foreach (var slot in bag.slots)
        {
            if (slot.IsFree) continue;

            if (bag.BusySlots.Count <= 0) return;
            var amount = bag.BusySlots.Count(check => check.Data.type == slot.Data.type);
            if (amount != 3) continue;

            var match = bag.BusySlots.Where(s => s.Data.type == slot.Data.type).ToList();
            Match(match);
            break;
        }
    }

    void Match(List<BagSlot> bagSlots)
    {
        foreach (var bagSlot in bagSlots)
        {
            var slot = bagSlot.TileSlot;
            slot.Hide();
            completeSlots.Add(slot);
            Game.Bag.Remove(slot);
        }

        OnMatch(bagSlots);
    }
}