using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

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

	private Tile GetRandomEmpty(List<Tile> tiles)
	{
		List<Tile> empty = tiles.Where((Tile t) => !t.IsInit).ToList();
		return empty[UnityEngine.Random.Range(0, empty.Count)];
	}
}
