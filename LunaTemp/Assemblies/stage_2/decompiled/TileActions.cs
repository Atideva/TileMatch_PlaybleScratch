using System.Collections.Generic;
using System.Linq;
using Luna.Unity;
using UnityEngine;

public class TileActions : GameComponent
{
	private List<Tile> _slots;

	private Camera _cam;

	private int clicks;

	protected override void OnInit()
	{
		_cam = Camera.main;
		Game.Input.OnTouchScreen += OnTouchScreen;
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
		Click(tile);
	}

	private void Click(Tile tile)
	{
		clicks++;
		if (tile.InBag)
		{
			Analytics.LogEvent("Bagckpack clicked", clicks);
			return;
		}
		Analytics.LogEvent("Tile clicked", clicks);
		if (!Game.Bag.NoSpace)
		{
			TileSlot empty = Game.Bag.EmptySlot;
			empty.Put(tile);
			tile.OnMoveFinish += PutBag;
		}
	}

	public void Observe(List<Tile> tiles)
	{
		_slots = tiles;
	}

	private void PutBag(Tile moving, TileSlot tileSlot)
	{
		Debug.Log("Move finished");
		moving.OnMoveFinish -= PutBag;
		Game.Bag.Put(moving, tileSlot);
	}
}
