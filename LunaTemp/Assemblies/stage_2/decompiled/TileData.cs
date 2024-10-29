using System;

[Serializable]
public class TileData
{
	public TileSO tile;

	public int amount;

	public bool CanSpawn => amount > 0;

	public void Spawned()
	{
		amount--;
	}
}
