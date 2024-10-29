using System;
using System.Collections.Generic;
using UnityEngine;

public class WinCondition : GameComponent
{
	public event Action OnWin = delegate
	{
	};

	protected override void OnInit()
	{
		Game.TileMatcher.OnMatch += Check;
	}

	private void Check(List<TileSlot> bagSlots, TileSO type)
	{
		if (bagSlots.Count <= 0)
		{
			Debug.Log("WTF");
			return;
		}
		if ((bool)bagSlots[0].Type)
		{
			Debug.Log("Check: " + bagSlots[0].Type.name);
		}
		else
		{
			Debug.LogWarning("Why bug is empty on match?", bagSlots[0].gameObject);
		}
		if (Game.TileMatcher.Completed >= Game.TilesInGame.Count)
		{
			this.OnWin();
		}
	}
}
