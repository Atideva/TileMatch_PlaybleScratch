using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileActions : GameComponent
{
	private List<TileSlot> _slots;

	public Camera _cam;

	protected override void OnInit()
	{
		_cam = Camera.main;
		Game.Input.OnTouchScreen += OnTouchScreen;
	}

	private void OnTouchScreen(Vector2 touchPos, float touchSize)
	{
		Vector3 pos = _cam.ScreenToWorldPoint(touchPos);
		IEnumerable<TileSlot> clickable = _slots.Where((TileSlot s) => s.IsClickable);
		foreach (TileSlot slot in clickable)
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

	private void Touched(TileSlot slot)
	{
		Click(slot);
	}

	private void Click(TileSlot slot)
	{
		Debug.Log(slot.Tile.icon.sprite.name + " clicked");
		if (!slot.InBag && !Game.Bag.NoSpace)
		{
			BagSlot emptySlot = Game.Bag.EmptySlot;
			emptySlot.Book(slot);
			slot.MoveTo(emptySlot);
			slot.OnMoveFinish += PutBag;
		}
	}

	public void Observe(List<TileSlot> tiles)
	{
		_slots = tiles;
	}

	private void PutBag(TileSlot moving, BagSlot bagSlot)
	{
		Debug.Log("Move finished");
		moving.OnMoveFinish -= PutBag;
		Game.Bag.Put(moving, bagSlot);
	}
}
