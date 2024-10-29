using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.Serialization;

public class TileSpawner : GameComponent
{
	[FormerlySerializedAs("levelData")]
	[SerializeField]
	private List<TileData> level = new List<TileData>();

	public Tile prefab;

	public List<Tile> spawned = new List<Tile>();

	public List<TileData> spawnData = new List<TileData>();

	public bool hideAtSpawn = true;

	public float spawnRate;

	public List<TileData> Level => level;

	public event Action<List<Tile>> OnSpawnFinish = delegate
	{
	};

	protected override void OnInit()
	{
		for (int i = 0; i < level.Count; i++)
		{
			level[i].type = i;
		}
	}

	public void Spawn(List<TileData> tiles, DeckLayer[] layers)
	{
		int tilez = tiles.Sum((TileData t) => t.amount);
		int slots = layers.Sum((DeckLayer p) => p.Slots.Length);
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
		spawnData = tileData;
		spawned.Clear();
		int total = tileData.Sum((TileData t) => t.amount);
		for (int i = 0; i < total; i++)
		{
			DeckLayer layer = GetRandom(layers);
			TileSlot emptySlot = layer.GetFreeSlot();
			if (emptySlot == null)
			{
				Debug.LogWarning("Why theres no empty slots?");
				continue;
			}
			TileData data = GetRandom(tileData);
			data.Decrease();
			Tile tile = UnityEngine.Object.Instantiate(prefab);
			tile.Set(data, layer.id);
			emptySlot.Put(tile);
			if (hideAtSpawn)
			{
				emptySlot.Hide();
			}
			spawned.Add(tile);
			yield return new WaitForSeconds(1f / spawnRate);
		}
		this.OnSpawnFinish(spawned);
	}

	private TileData GetRandom(List<TileData> data)
	{
		IEnumerable<TileData> onlyFree = data.Where((TileData p) => p.CanSpawn);
		int r = UnityEngine.Random.Range(0, onlyFree.Count());
		return data[r];
	}

	private DeckLayer GetRandom(DeckLayer[] layers)
	{
		IEnumerable<DeckLayer> onlyFree = layers.Where((DeckLayer p) => p.AnyFreeSlot);
		int r = UnityEngine.Random.Range(0, onlyFree.Count());
		return layers[r];
	}
}
