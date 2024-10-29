using System.Collections.Generic;
using System.Linq;
using Luna.Unity;
using UnityEngine;

public class Game : MonoBehaviour
{
	[Space(20f)]
	[SerializeField]
	private float autoGameOverInSeconds = 30f;

	[Space(20f)]
	[SerializeField]
	private Deck deck;

	[SerializeField]
	private TileActions actions;

	[SerializeField]
	private TileLocker locker;

	[SerializeField]
	private TilesBag bag;

	[SerializeField]
	private TileSpawnAnimation spawnAnimation;

	[SerializeField]
	private TileMatcher tileMatcher;

	[SerializeField]
	private LoseCondition loseCondition;

	[SerializeField]
	private WinCondition winCondition;

	[SerializeField]
	private InputTouch input;

	[SerializeField]
	private EndCard endCard;

	[SerializeField]
	private Quest quest;

	[Space]
	[SerializeField]
	private bool useRandom;

	[SerializeField]
	private TileRandomSpawner spawnRandom;

	[Space(20f)]
	[SerializeField]
	private int tileToSpawn;

	[SerializeField]
	private int tilesInScene;

	[SerializeField]
	private List<Tile> tilesInGame = new List<Tile>();

	private bool _isGameEnded;

	public IReadOnlyList<Tile> TilesInGame => tilesInGame;

	public TilesBag Bag => bag;

	public TileMatcher TileMatcher => tileMatcher;

	public InputTouch Input => input;

	public TileActions Actions => actions;

	private void Start()
	{
		InitComponents();
		Invoke("Win", autoGameOverInSeconds);
		Invoke(useRandom ? "Spawn" : "StartGame", 0.01f);
		quest.OnWin += QuestWin;
		winCondition.OnWin += Win;
		loseCondition.OnLose += Lose;
		actions.OnMoveStart += OnTileMoved;
	}

	private void QuestWin()
	{
		if (!_isGameEnded)
		{
			_isGameEnded = true;
			Invoke("Win", 1f);
		}
	}

	private void OnTileMoved(Tile obj)
	{
		RefreshTiles();
	}

	private void Win()
	{
		if (!_isGameEnded)
		{
			_isGameEnded = true;
			endCard.Show();
			actions.Disable();
			LifeCycle.GameEnded();
			Analytics.LogEvent("Game win", 0);
			Debug.Log("Game win!");
		}
	}

	public void OpenURL()
	{
		Playable.InstallFullGame();
	}

	private void Lose()
	{
		if (!_isGameEnded)
		{
			_isGameEnded = true;
			endCard.Show();
			actions.Disable();
			LifeCycle.GameEnded();
			Analytics.LogEvent("Game lose", 0);
			Debug.Log("Game lose!");
		}
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
		spawnRandom.Spawn(deck.Tiles);
		spawnRandom.OnSpawnFinish += ShowDeck;
	}

	private void StartGame()
	{
		ShowDeck(deck.Tiles);
	}

	private void ShowDeck(List<Tile> spawned)
	{
		tilesInGame = spawned;
		spawnAnimation.SpawnAnimation(deck.FirstLayer, deck.SecondLayer);
		actions.Observe(deck.Tiles);
		RefreshTiles();
	}

	private void RefreshTiles()
	{
		locker.Refresh(tilesInGame, deck.Layers);
	}

	private void OnValidate()
	{
		if (!Application.isPlaying)
		{
			InitComponents();
			tilesInScene = deck.Layers.Sum((DeckLayer p) => p.Tiles.Length);
		}
	}
}
