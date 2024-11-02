using System;
using System.Collections.Generic;
using System.Linq;
using Luna.Unity;
using UnityEngine;

public class TileMatcher : GameComponent
{
	public GameObject vfx;

	public List<Tile> completed = new List<Tile>();

	private int matches;

	public List<TileSlot> lastMatch;

	public int Completed => completed.Count;

	public event Action<List<TileSlot>, TileSO> OnMatch3 = delegate
	{
	};

	protected override void OnInit()
	{
		Game.Actions.OnMoveFinish += Check;
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
		lastMatch = bagSlots;
		matches++;
		Analytics.LogEvent("3 tiles matched: ", matches);
		Debug.Log("Matched: " + bagSlots[0].Type);
		this.OnMatch3(bagSlots, bagSlots[0].Type);
		foreach (TileSlot bagSlot in bagSlots)
		{
			Tile tile = bagSlot.Tile;
			tile.Hide();
			completed.Add(tile);
			Game.Bag.Empty(bagSlot);
			UnityEngine.Object.Instantiate(vfx, tile.Position, Quaternion.identity);
		}
	}
}
