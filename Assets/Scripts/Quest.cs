using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Quest : GameComponent
{
    [SerializeField] List<QuestSlot> slots = new();
    

    protected override void OnInit()
    {
        Game.TileMatcher.OnMatch += OnMatch;
    }
    public event Action OnWin = delegate { }; 
    void OnMatch(List<TileSlot> bagSlots, TileSO type)
    {
        if (bagSlots.Count <= 0)
        {
            Debug.Log("WTF");
            return;
        }

        var find = slots.Where(s => s.Type == type).Where(s=>s.Locked).ToList();
        foreach (var slot in find)
        {
            slot.Unlock();
        }

        if (slots.All(s => s.Complete))
        {
            OnWin();
        }
      
    }
}
