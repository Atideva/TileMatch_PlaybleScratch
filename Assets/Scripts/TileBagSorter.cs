using System.Collections;
using System.Linq;
using UnityEngine;

public class TileBagSorter : GameComponent
{
    public bool enable;
    public float intervalSec = 0.05f;
    bool _isSorting;

    protected override void OnInit()
    {
        if (!enable) return;
        Game.Bag.OnRemove += SortAfterMatch3;
    }

    void SortAfterMatch3()
    {
        if (_isSorting) return;
        StartCoroutine(Sorting());
    }


    IEnumerator Sorting()
    {
        _isSorting = true;
        yield return new WaitForSeconds(intervalSec);

        while (NeedsSorting)
        {
            var busy = SortingSlot();
            var empty = Game.Bag.LastEmptySlot;
            Game.Bag.Move(busy, empty);
            yield return new WaitForSeconds(intervalSec);
        }

        _isSorting = false;
    }

    TileSlot SortingSlot()
        => Game.Bag
            .BusySlots
            .Where(slot => slot.ID != 0)
            .FirstOrDefault(slot => Game.Bag.LeftFrom(slot).IsEmpty);

    bool NeedsSorting
        => Game.Bag
            .BusySlots
            .Where(slot => slot.ID != 0)
            .Any(slot => Game.Bag.LeftFrom(slot).IsEmpty);
}