using System;
using System.Collections.Generic;

public class TileRandomSpawner : GameComponent
{
	public float spawnRate;

	public List<Tile> spawned = new List<Tile>();

	public event Action<List<Tile>> OnSpawnFinish = delegate
	{
	};

	protected override void OnInit()
	{
	}

	public void Spawn(List<Tile> tiles)
	{
	}
}
