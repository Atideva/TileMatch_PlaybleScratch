using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class MatchCondition : GameComponent
{
    public event Action<List<TileSlot>> OnMatch = delegate { };
    public List<Tile> completeSlots = new();
    public int Completed => completeSlots.Count;

    protected override void OnInit()
    {
        Game.Bag.OnPut += Check;
    }

    void Check()
    {
        var bag = Game.Bag;
        foreach (var slot in bag.BusySlots)
        {
            var same = SameAmount(slot.Type);
            if (same < 3) continue;

            var match = bag.BusySlots.Where(s => s.Type == slot.Type).ToList();
            Match(match);
            break;
        }
    }

    int SameAmount(TileSO type) 
        => Game.Bag.BusySlots.Count(check => check.Type == type);

    void Match(List<TileSlot> bagSlots)
    {
        foreach (var bagSlot in bagSlots)
        {
            var slot = bagSlot.Tile;
            slot.Hide();
            completeSlots.Add(slot);
            Game.Bag.Remove(slot);
        }

        OnMatch(bagSlots);
    }
}