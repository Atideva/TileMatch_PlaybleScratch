using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.Serialization;

public class TileBagSorter : GameComponent
{
    public bool enable;
    public float intervalSec = 0.05f;

    protected override void OnInit()
    {
        if (!enable) return;
        Game.Bag.OnRemove += Sort;
    }

    void Sort()
    {
        if (_isSorting) return;
        StartCoroutine(Sorting());
    }

    bool _isSorting;

    IEnumerator Sorting()
    {
        _isSorting = true;

        while (NeedsSorting)
        {
            var slot = SortingSlot();
            var empty = Game.Bag.EmptySlot;
            
            yield return new WaitForSeconds(intervalSec);
        }

        _isSorting = false;
    }

    TileSlot SortingSlot()
        => Game.Bag
            .BusySlots
            .Where(slot => slot.ID != 0)
            .FirstOrDefault(slot => Game.Bag.slots[slot.ID - 1].IsEmpty);

    bool NeedsSorting
        => Game.Bag
            .BusySlots
            .Where(slot => slot.ID != 0)
            .Any(slot => Game.Bag.slots[slot.ID - 1].IsEmpty);
}