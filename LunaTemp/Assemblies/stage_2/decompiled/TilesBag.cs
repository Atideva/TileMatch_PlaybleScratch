using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TilesBag : MonoBehaviour
{
	public List<TileSlot> slots = new List<TileSlot>();

	public List<TileSlot> BusySlots => slots.Where((TileSlot b) => b.Busy).ToList();

	public bool HaveEmptySlot => slots.Any((TileSlot s) => s.IsEmpty);

	public TileSlot LastEmptySlot => slots.FirstOrDefault((TileSlot s) => s.IsEmpty);

	public bool NoSpace => !HaveEmptySlot;

	public event Action OnPut = delegate
	{
	};

	public event Action OnRemove = delegate
	{
	};

	public TileSlot LeftFrom(TileSlot slot)
	{
		return (slot.ID <= 0) ? null : slots[slot.ID - 1];
	}

	public TileSlot GetSlotFor(Tile tile)
	{
		TileSlot findSame = BusySlots.FirstOrDefault((TileSlot s) => s.Type == tile.Type);
		if ((bool)findSame)
		{
			int rightID = findSame.ID + 1;
			TileSlot rightSlot = slots[rightID];
			for (int i = slots.Count - 1; i >= rightID + 1; i--)
			{
				TileSlot slot = slots[i];
				TileSlot leftSlot = slots[i - 1];
				if (leftSlot.Busy)
				{
					Put(leftSlot.Tile, slot);
				}
			}
			return rightSlot;
		}
		return LastEmptySlot;
	}

	private void Awake()
	{
		for (int i = 0; i < slots.Count; i++)
		{
			slots[i].ID = i;
		}
	}

	public void Put(Tile tile, TileSlot tileSlot)
	{
		tile.PutInBag();
		tileSlot.Put(tile);
		this.OnPut();
	}

	public void Move(TileSlot from, TileSlot to)
	{
		Tile tile = from.Tile;
		from.Empty();
		to.Put(tile);
	}

	public void Empty(TileSlot slot)
	{
		slot.Empty();
		this.OnRemove();
	}
}
