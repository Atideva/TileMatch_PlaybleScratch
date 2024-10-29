using System;
using UnityEngine;

[Serializable]
public class TileData
{
	public int type;

	public Sprite icon;

	public int amount;

	public bool CanSpawn => amount > 0;

	public void Decrease()
	{
		amount--;
	}
}
