using System;
using System.Collections.Generic;
using System.Linq;
using Luna.Unity;
using UnityEngine;

public class TileActions : GameComponent
{
	private List<Tile> _slots;

	private Camera _cam;

	private int _clicks;

	private bool _isDisable;

	public event Action OnMoveFinish = delegate
	{
	};

	public event Action<Tile> OnMoveStart = delegate
	{
	};

	protected override void OnInit()
	{
		_cam = Camera.main;
		if (Application.isPlaying)
		{
			Game.Input.OnTouchScreen += OnTouchScreen;
		}
	}

	public void Disable()
	{
		_isDisable = true;
	}

	private void OnTouchScreen(Vector2 touchPos, float touchSize)
	{
		Vector3 pos = _cam.ScreenToWorldPoint(touchPos);
		IEnumerable<Tile> clickable = _slots.Where((Tile s) => s.IsClickable);
		foreach (Tile slot in clickable)
		{
			float dist = Vector2.Distance(pos, slot.Position);
			if (dist > touchSize)
			{
				continue;
			}
			Touched(slot);
			break;
		}
	}

	private void Touched(Tile tile)
	{
		if (!_isDisable)
		{
			Click(tile);
		}
	}

	private void Click(Tile tile)
	{
		_clicks++;
		Analytics.LogEvent("Tile clicked: " + tile.Type.name, _clicks);
		if (!Game.Bag.NoSpace)
		{
			TileSlot empty = Game.Bag.GetSlotFor(tile);
			Game.Bag.Put(tile, empty);
			this.OnMoveStart(tile);
			tile.OnMoveFinish += MoveFinished;
		}
	}

	public void Observe(List<Tile> tiles)
	{
		_slots = tiles;
	}

	private void MoveFinished(Tile moving, TileSlot tileSlot)
	{
		Debug.Log("Move finished: " + moving.Type.name, moving.gameObject);
		moving.OnMoveFinish -= MoveFinished;
		this.OnMoveFinish();
	}
}
