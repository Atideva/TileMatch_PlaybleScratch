using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileRandomSpawner : GameComponent
{
	[SerializeField]
	private List<TileData> level = new List<TileData>();

	public float spawnRate;

	public List<Tile> spawned = new List<Tile>();

	public int TotalTiles => level.Sum((TileData d) => d.amount);

	public event Action<List<Tile>> OnSpawnFinish = delegate
	{
	};

	protected override void OnInit()
	{
	}

	public void Spawn(List<Tile> tiles)
	{
		if (TotalTiles != tiles.Count)
		{
			Debug.LogError("Tiles amount should be equals bricks amount on scene");
			Debug.LogError("Tiles: " + TotalTiles + ", Slots" + tiles.Count);
		}
		else
		{
			StartCoroutine(RunSpawn(tiles));
		}
	}

	private Tile GetRandomEmpty(List<Tile> tiles)
	{
		List<Tile> empty = tiles.Where((Tile t) => !t.IsInit).ToList();
		return empty[UnityEngine.Random.Range(0, empty.Count)];
	}

	private IEnumerator RunSpawn(List<Tile> tiles)
	{
		spawned.Clear();
		foreach (Tile tile2 in tiles)
		{
			tile2.Hide();
		}
		Debug.LogError("Total: " + TotalTiles);
		for (int i = 0; i < TotalTiles; i++)
		{
			Tile tile = GetRandomEmpty(tiles);
			if (!tile)
			{
				Debug.LogWarning("Why theres no empty slot?");
				continue;
			}
			TileData data = BookRandom();
			tile.Set(data);
			spawned.Add(tile);
			yield return new WaitForSeconds(1f / spawnRate);
		}
		yield return new WaitForSeconds(1f / spawnRate);
		this.OnSpawnFinish(spawned);
	}

	private TileData BookRandom()
	{
		IEnumerable<TileData> onlyFree = level.Where((TileData p) => p.CanSpawn);
		int r = UnityEngine.Random.Range(0, onlyFree.Count());
		level[r].Spawned();
		return level[r];
	}
}
