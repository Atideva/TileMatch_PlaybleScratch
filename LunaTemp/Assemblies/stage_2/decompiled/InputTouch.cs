using System;
using System.Collections.Generic;
using UnityEngine;

public class InputTouch : GameComponent
{
	public float inputCooldown = 0.1f;

	public List<Vector2> touches = new List<Vector2>();

	public float touchSize = 0.3f;

	private float _cooldown;

	public event Action<Vector2, float> OnTouchScreen = delegate
	{
	};

	protected override void OnInit()
	{
	}

	private void Update()
	{
		if (_cooldown > 0f)
		{
			_cooldown -= Time.deltaTime;
		}
		else if (Input.GetMouseButtonDown(0))
		{
			_cooldown = inputCooldown;
			touches.Add(Input.mousePosition);
			this.OnTouchScreen(Input.mousePosition, touchSize);
		}
	}
}
