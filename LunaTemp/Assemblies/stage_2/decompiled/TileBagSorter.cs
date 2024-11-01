using System.Collections;
using System.Linq;
using UnityEngine;

public class TileBagSorter : GameComponent
{
	public bool enable;

	public float intervalSec = 0.05f;

	private bool _isSorting;

	private bool NeedsSorting => Game.Bag.BusySlots.Where((TileSlot slot) => slot.ID != 0).Any((TileSlot slot) => Game.Bag.LeftFrom(slot).IsEmpty);

	protected override void OnInit()
	{
		if (enable)
		{
			Game.Bag.OnRemove += SortAfterMatch3;
		}
	}

	private void SortAfterMatch3()
	{
		if (!_isSorting)
		{
			StartCoroutine(Sorting());
		}
	}

	private IEnumerator Sorting()
	{
		_isSorting = true;
		yield return new WaitForSeconds(intervalSec);
		while (NeedsSorting)
		{
			TileSlot busy = SortingSlot();
			TileSlot empty = Game.Bag.LastEmptySlot;
			Game.Bag.Move(busy, empty);
			yield return new WaitForSeconds(intervalSec);
		}
		_isSorting = false;
	}

	private TileSlot SortingSlot()
	{
		return Game.Bag.BusySlots.Where((TileSlot slot) => slot.ID != 0).FirstOrDefault((TileSlot slot) => Game.Bag.LeftFrom(slot).IsEmpty);
	}
}
