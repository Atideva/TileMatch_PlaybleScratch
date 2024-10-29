using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TilesBag : MonoBehaviour
{
	public List<BagSlot> slots = new List<BagSlot>();

	public List<BagSlot> BusySlots => slots.Where((BagSlot b) => b.Busy).ToList();

	public bool HaveEmptySlot => slots.Any((BagSlot s) => s.IsFree);

	public BagSlot EmptySlot => slots.FirstOrDefault((BagSlot s) => s.IsFree);

	public bool NoSpace => !HaveEmptySlot;

	public event Action OnPut = delegate
	{
	};

	public event Action OnRemove = delegate
	{
	};

	private void Awake()
	{
		for (int i = 0; i < slots.Count; i++)
		{
			slots[i].ID = i;
		}
	}

	public void Put(TileSlot tileSlot, BagSlot bagSlot)
	{
		tileSlot.PutInBag();
		bagSlot.Put(tileSlot);
		this.OnPut();
	}

	public void Remove(TileSlot slot)
	{
		BagSlot find = slots.FirstOrDefault((BagSlot s) => s.TileSlot == slot);
		if ((bool)find)
		{
			find.Empty();
			this.OnRemove();
		}
	}
}
