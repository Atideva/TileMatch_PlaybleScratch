using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileSpawner : GameComponent
{
	[SerializeField]
	private List<TileData> level = new List<TileData>();

	public Tile prefab;

	public List<Tile> spawned = new List<Tile>();

	public bool hideAtSpawn = true;

	public float spawnRate;

	public List<TileData> Level => level;

	public event Action<List<Tile>> OnSpawnFinish = delegate
	{
	};

	protected override void OnInit()
	{
	}

	public void Spawn(List<TileData> tiles, DeckLayer[] layers)
	{
		int tilez = tiles.Sum((TileData t) => t.amount);
		int slots = layers.Sum((DeckLayer p) => p.Tiles.Length);
		if (tilez != slots)
		{
			Debug.LogError("Tiles amount should be equals bricks amount on scene");
			Debug.LogError("Tiles: " + tilez + ", Slots" + slots);
		}
		else
		{
			StartCoroutine(RunSpawn(tiles, layers));
		}
	}

	private IEnumerator RunSpawn(List<TileData> tileData, DeckLayer[] layers)
	{
		yield return new WaitForSeconds(1f / spawnRate);
		this.OnSpawnFinish(spawned);
	}
}
