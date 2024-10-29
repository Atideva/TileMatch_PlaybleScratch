using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class WinCondition : GameComponent
{
    public event Action OnWin = delegate { }; 
    public List<TileSlot> completeSlots = new();
    int Completed => completeSlots.Count;
    protected override void OnInit()
    {
        Game.MatchCondition.OnMatch += Check;
    }

    void Check(List<BagSlot> bagSlots)
    {
        if (Game.MatchCondition.Completed < Game.Tiles.Count) return;
        OnWin();
    }
}
