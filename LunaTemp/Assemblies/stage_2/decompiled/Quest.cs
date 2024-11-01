using System;
using System.Collections.Generic;
using System.Linq;
using Luna.Unity;
using UnityEngine;

public class Quest : GameComponent
{
	[SerializeField]
	private List<QuestSlot> slots = new List<QuestSlot>();

	public event Action OnWin = delegate
	{
	};

	protected override void OnInit()
	{
		Game.TileMatcher.OnMatch += OnMatch;
	}

	private void OnMatch(List<TileSlot> bagSlots, TileSO type)
	{
		if (bagSlots.Count <= 0)
		{
			Debug.Log("WTF");
			return;
		}
		List<QuestSlot> locked = (from s in slots
			where s.Type == type
			where s.Locked
			select s).ToList();
		foreach (QuestSlot slot in locked)
		{
			slot.Unlock();
		}
		if (slots.All((QuestSlot s) => s.Complete))
		{
			Analytics.LogEvent("Quest win", 0);
			this.OnWin();
		}
		else
		{
			Analytics.LogEvent("Quest in process. Locked items: " + locked.Count, 0);
		}
	}
}
