using System;
using System.Collections.Generic;
using UnityEngine;

public class Tile : MonoBehaviour
{
	public SpriteRenderer icon;

	public SpriteRenderer disabledTile;

	public List<Tile> coverTiles = new List<Tile>();

	public Vector2 Position => base.transform.position;

	public TileData Data { get; private set; }

	public TileSlot Slot { get; private set; }

	public int Layer { get; private set; }

	public bool IsClickable { get; set; }

	public event Action<Tile> OnClick = delegate
	{
	};

	public void SetContacts(List<Tile> cover)
	{
		if (cover != null)
		{
			coverTiles.Clear();
			coverTiles = cover;
			if (cover.Count > 0)
			{
				Disable();
			}
		}
	}

	public void SetSlot(TileSlot slot)
	{
		Slot = slot;
		base.transform.SetParent(Slot.transform);
		Invoke("ResetPosition", 0.1f);
		ResetPosition();
	}

	public void Enable()
	{
		IsClickable = true;
		disabledTile.gameObject.SetActive(false);
	}

	public void Disable()
	{
		IsClickable = false;
		disabledTile.gameObject.SetActive(true);
	}

	private void ResetPosition()
	{
		base.transform.localPosition = Vector3.zero;
	}

	private void OnMouseDown()
	{
		if (IsClickable)
		{
			this.OnClick(this);
		}
	}

	public void Set(TileData data, int layer)
	{
		Data = data;
		Layer = layer;
		icon.sprite = data.icon;
		Enable();
	}
}
