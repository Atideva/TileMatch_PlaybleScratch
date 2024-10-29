using System;
using System.Collections.Generic;
using System.Linq;

public class MatchCondition : GameComponent
{
	public List<TileSlot> completeSlots = new List<TileSlot>();

	public int Completed => completeSlots.Count;

	public event Action<List<BagSlot>> OnMatch = delegate
	{
	};

	protected override void OnInit()
	{
		Game.Bag.OnPut += Check;
	}

	private void Check()
	{
		TilesBag bag = Game.Bag;
		foreach (BagSlot slot in bag.BusySlots)
		{
			int same = SameAmount(slot.Data.type);
			if (same < 3)
			{
				continue;
			}
			List<BagSlot> match = bag.BusySlots.Where((BagSlot s) => s.Data.type == slot.Data.type).ToList();
			Match(match);
			break;
		}
	}

	private int SameAmount(int type)
	{
		return Game.Bag.BusySlots.Count((BagSlot check) => check.Data.type == type);
	}

	private void Match(List<BagSlot> bagSlots)
	{
		foreach (BagSlot bagSlot in bagSlots)
		{
			TileSlot slot = bagSlot.TileSlot;
			slot.Hide();
			completeSlots.Add(slot);
			Game.Bag.Remove(slot);
		}
		this.OnMatch(bagSlots);
	}
}
