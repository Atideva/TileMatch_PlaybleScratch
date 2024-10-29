using System;
using System.Collections.Generic;
using System.Linq;
using Luna.Unity;

public class MatchCondition : GameComponent
{
	public List<Tile> completeSlots = new List<Tile>();

	private int matches;

	public int Completed => completeSlots.Count;

	public event Action<List<TileSlot>> OnMatch = delegate
	{
	};

	protected override void OnInit()
	{
		Game.Bag.OnPut += Check;
	}

	private void Check()
	{
		TilesBag bag = Game.Bag;
		foreach (TileSlot slot in bag.BusySlots)
		{
			int same = SameAmount(slot.Type);
			if (same < 3)
			{
				continue;
			}
			List<TileSlot> match = bag.BusySlots.Where((TileSlot s) => s.Type == slot.Type).ToList();
			Match(match);
			break;
		}
	}

	private int SameAmount(TileSO type)
	{
		return Game.Bag.BusySlots.Count((TileSlot check) => check.Type == type);
	}

	private void Match(List<TileSlot> bagSlots)
	{
		matches++;
		foreach (TileSlot bagSlot in bagSlots)
		{
			Tile slot = bagSlot.Tile;
			slot.Hide();
			completeSlots.Add(slot);
			Game.Bag.Remove(slot);
		}
		Analytics.LogEvent("3 tiles matched: ", matches);
		this.OnMatch(bagSlots);
	}
}
