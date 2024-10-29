using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Game : MonoBehaviour
{
	[SerializeField]
	private Deck deck;

	[SerializeField]
	private TileSpawner spawner;

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

	[Space(20f)]
	[SerializeField]
	private int totalTiles;

	[SerializeField]
	private int totalBricks;

	[SerializeField]
	private bool randomTiles;

	[SerializeField]
	private List<Tile> tiles = new List<Tile>();

	public IReadOnlyList<Tile> Tiles => tiles;

	public IReadOnlyList<TileData> LevelData => spawner.Level;

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
		spawner.Spawn(LevelData.ToList(), deck.Layers);
		spawner.OnSpawnFinish += Spawned;
	}

	private void Spawned(List<Tile> tiles)
	{
		this.tiles = tiles;
		spawnAnimation.SpawnAnimation(deck.FirstLayer, deck.SecondLayer);
		actions.Observe(deck.Slots);
		locker.Refresh(tiles, deck.Layers);
	}

	private void OnValidate()
	{
		InitComponents();
		totalTiles = spawner.Level.Sum((TileData t) => t.amount);
		totalBricks = deck.Layers.Sum((DeckLayer p) => p.Slots.Length);
	}
}
