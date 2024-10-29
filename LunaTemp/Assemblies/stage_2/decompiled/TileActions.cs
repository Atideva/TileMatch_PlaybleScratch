using System.Collections.Generic;
using UnityEngine;

public class TileActions : GameComponent
{
	protected override void OnInit()
	{
	}

	public void Observe(List<Tile> tiles)
	{
		foreach (Tile tile in tiles)
		{
			tile.OnClick += Click;
		}
	}

	private void Click(Tile tile)
	{
		Debug.Log(tile.icon.sprite.name + " clicked");
		if (!tile.Slot.InBag)
		{
			TilesBag bag = Game.Bag;
			if (bag.HaveEmptySlot)
			{
				TileSlot slot = tile.Slot;
				BagSlot bagSlot = bag.EmptySlot;
				bagSlot.Book(slot);
				slot.MoveToPosition(bagSlot);
				slot.OnMoveFinish += PutBag;
			}
		}
	}

	private void PutBag(TileSlot moving, BagSlot bagSlot)
	{
		Debug.Log("Move finished");
		moving.OnMoveFinish -= PutBag;
		Game.Bag.Put(moving, bagSlot);
	}
}
