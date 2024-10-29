using System;
using System.Collections.Generic;

public class WinCondition : GameComponent
{
	public List<TileSlot> completeSlots = new List<TileSlot>();

	private int Completed => completeSlots.Count;

	public event Action OnWin = delegate
	{
	};

	protected override void OnInit()
	{
		Game.MatchCondition.OnMatch += Check;
	}

	private void Check(List<BagSlot> bagSlots)
	{
		if (Game.MatchCondition.Completed >= Game.Tiles.Count)
		{
			this.OnWin();
		}
	}
}
