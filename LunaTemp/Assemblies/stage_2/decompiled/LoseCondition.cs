using System;
using UnityEngine;

public class LoseCondition : GameComponent
{
	private float _checkDelay;

	public event Action OnLose = delegate
	{
	};

	protected override void OnInit()
	{
		Game.Bag.OnPut += OnBagChange;
	}

	private void OnBagChange()
	{
		_checkDelay = 0.7f;
	}

	private void Update()
	{
		if (!(_checkDelay <= 0f))
		{
			_checkDelay -= Time.deltaTime;
			if (_checkDelay <= 0f)
			{
				Check();
			}
		}
	}

	private void Check()
	{
		if (!Game.Bag.HaveEmptySlot)
		{
			Lose();
		}
	}

	private void Lose()
	{
		this.OnLose();
	}
}
