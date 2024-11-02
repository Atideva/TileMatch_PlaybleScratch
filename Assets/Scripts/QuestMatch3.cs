using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class QuestMatch3 : GameComponent
{
    [SerializeField] List<QuestSlot> slots = new();
    public event Action OnWin = delegate { };
    protected override void OnInit()
    {
        Game.TileMatcher.OnMatch3 += OnMatch3;
    }

    void OnMatch3(List<TileSlot> bagSlots, TileSO type)
    {
        if (bagSlots.Count <= 0)
        {
            Debug.Log("WTF");
            return;
        }

        var locked = slots.Where(s => s.Type == type).Where(s => s.Locked).ToList();
        foreach (var slot in locked)
            slot.Unlock();

        if (slots.All(s => s.Complete))
        {
            OnWin();
            Luna.Unity.Analytics.LogEvent("Quest win", 0);
        }
        else
        {
            Luna.Unity.Analytics.LogEvent("Quest in process. Locked items: "+locked.Count, 0);
        }
    }
}