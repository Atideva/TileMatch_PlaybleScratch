using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using static Luna.Unity.Analytics;

public class TileMatcher : GameComponent
{
    public GameObject vfx;
    public event Action<List<TileSlot>, TileSO> OnMatch3 = delegate { };
    public List<Tile> completed = new();
    public int Completed => completed.Count;

    protected override void OnInit()
    {
        // Game.Bag.OnPut += Check;
        Game.Actions.OnMoveFinish += Check;
    }

    void Check()
    {
        var bag = Game.Bag;
        foreach (var slot in bag.BusySlots)
        {
            var same = SameAmount(slot.Type);
            if (same < 3)
            {
//                Debug.Log("Same count in bag < 3");
                continue;
            }

            var match = bag.BusySlots.Where(s => s.Type == slot.Type).ToList();
            Match(match);
            break;
        }
    }

    int SameAmount(TileSO type)
        => Game.Bag.BusySlots.Count(check => check.Type == type);

    int matches;
    public List<TileSlot> lastMatch;

    void Match(List<TileSlot> bagSlots)
    {
        lastMatch = bagSlots;
        matches++;
        LogEvent("3 tiles matched: ", matches);

        Debug.Log("Matched: " + bagSlots[0].Type);
        OnMatch3(bagSlots, bagSlots[0].Type);

        foreach (var bagSlot in bagSlots)
        {
            var tile = bagSlot.Tile;
            tile.Hide();
            completed.Add(tile);
            Game.Bag.Empty(bagSlot);
            Instantiate(vfx, tile.Position, Quaternion.identity);
        }
    }
}