using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class QuestTyrRewards : GameComponent
{
	[SerializeField]
	private int cashForMatch3 = 100;

	[SerializeField]
	private TextMeshProUGUI balanceTxt;

	[SerializeField]
	private FloatingText floatingText;

	[SerializeField]
	private AnimationScale scaleAnim;

	[Space(20f)]
	[SerializeField]
	private int balance;

	[SerializeField]
	private FloatingText lastText;

	protected override void OnInit()
	{
		RefreshText();
		Game.TileMatcher.OnMatch3 += OnMatch3;
	}

	private void OnMatch3(List<TileSlot> slots, TileSO arg2)
	{
		balance += cashForMatch3;
		RefreshText();
		lastText = Object.Instantiate(floatingText, slots[1].Position, Quaternion.identity);
		lastText.Play(cashForMatch3, "+", "$");
	}

	private void RefreshText()
	{
		balanceTxt.text = "$" + balance;
		scaleAnim.Play(balanceTxt.transform);
	}
}
