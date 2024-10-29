using System.Collections;
using System.Linq;
using UnityEngine;

public class TileBagSorter : GameComponent
{
	public bool enable;

	public float intervalSec = 0.05f;

	private bool _isSorting;

	private bool NeedsSorting => Game.Bag.BusySlots.Where((TileSlot slot) => slot.ID != 0).Any((TileSlot slot) => Game.Bag.slots[slot.ID - 1].IsEmpty);

	protected override void OnInit()
	{
		if (enable)
		{
			Game.Bag.OnRemove += Sort;
		}
	}

	private void Sort()
	{
		if (!_isSorting)
		{
			StartCoroutine(Sorting());
		}
	}

	private IEnumerator Sorting()
	{
		_isSorting = true;
		while (NeedsSorting)
		{
			SortingSlot();
			_ = Game.Bag.EmptySlot;
			yield return new WaitForSeconds(intervalSec);
		}
		_isSorting = false;
	}

	private TileSlot SortingSlot()
	{
		return Game.Bag.BusySlots.Where((TileSlot slot) => slot.ID != 0).FirstOrDefault((TileSlot slot) => Game.Bag.slots[slot.ID - 1].IsEmpty);
	}
}
