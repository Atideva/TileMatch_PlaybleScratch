using System;
using System.Collections.Generic;

public class TileSpawner : GameComponent
{
	public Tile prefab;

	public List<Tile> spawned = new List<Tile>();

	public bool hideAtSpawn = true;

	public float spawnRate;

	public event Action<List<Tile>> OnSpawnFinish = delegate
	{
	};

	protected override void OnInit()
	{
	}
}
