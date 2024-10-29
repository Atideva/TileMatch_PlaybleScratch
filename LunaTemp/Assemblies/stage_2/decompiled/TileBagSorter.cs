using System.Collections;
using System.Linq;
using UnityEngine;

public class TileBagSorter : GameComponent
{
	public bool enable;

	public float intervalSec = 0.05f;

	private bool _isSorting;

	private bool NeedsSorting => Game.Bag.BusySlots.Where((BagSlot slot) => slot.ID != 0).Any((BagSlot slot) => Game.Bag.slots[slot.ID - 1].IsEmpty);

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
			yield return new WaitForSeconds(intervalSec);
		}
		_isSorting = false;
	}

	private BagSlot SortingSlot()
	{
		return Game.Bag.BusySlots.Where((BagSlot slot) => slot.ID != 0).FirstOrDefault((BagSlot slot) => Game.Bag.slots[slot.ID - 1].IsEmpty);
	}
}
