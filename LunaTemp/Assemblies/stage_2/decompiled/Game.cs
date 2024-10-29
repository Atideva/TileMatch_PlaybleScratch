using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.Serialization;

public class Game : MonoBehaviour
{
	[SerializeField]
	private Deck deck;

	[SerializeField]
	private TileRandomSpawner spawnRandom;

	[SerializeField]
	private TileActions actions;

	[SerializeField]
	private TileLocker locker;

	[SerializeField]
	private TilesBag bag;

	[SerializeField]
	private TileSpawnAnimation spawnAnimation;

	[SerializeField]
	private MatchCondition matchCondition;

	[SerializeField]
	private LoseCondition loseCondition;

	[SerializeField]
	private WinCondition winCondition;

	[SerializeField]
	private InputTouch input;

	[FormerlySerializedAs("totalTiles")]
	[Space(20f)]
	[SerializeField]
	private int tileToSpawn;

	[FormerlySerializedAs("tilesOnScene")]
	[FormerlySerializedAs("totalBricks")]
	[SerializeField]
	private int tilesInScene;

	[SerializeField]
	private bool randomTiles;

	[SerializeField]
	private List<Tile> tiles = new List<Tile>();

	public IReadOnlyList<Tile> Tiles => tiles;

	public TilesBag Bag => bag;

	public MatchCondition MatchCondition => matchCondition;

	public InputTouch Input => input;

	private void Start()
	{
		InitComponents();
		Invoke("Spawn", 0.1f);
	}

	private void InitComponents()
	{
		GameComponent[] find = Object.FindObjectsOfType<GameComponent>();
		GameComponent[] array = find;
		foreach (GameComponent component in array)
		{
			component.Init(this);
		}
	}

	private void Spawn()
	{
		spawnRandom.Spawn(deck.Slots);
		spawnRandom.OnSpawnFinish += Spawned;
	}

	private void Spawned(List<Tile> spawned)
	{
		tiles = spawned;
		spawnAnimation.SpawnAnimation(deck.FirstLayer, deck.SecondLayer);
		actions.Observe(deck.Slots);
		locker.Refresh(spawned, deck.Layers);
	}

	private void OnValidate()
	{
		InitComponents();
		tileToSpawn = spawnRandom.TotalTiles;
		tilesInScene = deck.Layers.Sum((DeckLayer p) => p.Tiles.Length);
	}
}
