using System;
using System.Collections.Generic;
using System.Linq;
using Luna.Unity;
using UnityEngine;
using UnityEngine.Serialization;

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

	[FormerlySerializedAs("boxLocker")]
	[SerializeField]
	private TileLockerBox2D box2DLocker;

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

	[FormerlySerializedAs("quest")]
	[SerializeField]
	private QuestMatch3 questMatch3;

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

	public bool _isGameEnded;

	public IReadOnlyList<Tile> TilesInGame => tilesInGame;

	public TilesBag Bag => bag;

	public TileMatcher TileMatcher => tileMatcher;

	public InputTouch Input => input;

	public TileActions Actions => actions;

	public WinCondition Condition => winCondition;

	public event Action OnQuestWin = delegate
	{
	};

	public event Action OnLose = delegate
	{
	};

	private void Start()
	{
		InitComponents();
		Invoke("Win", autoGameOverInSeconds);
		Invoke(useRandom ? "Spawn" : "StartGame", 0.01f);
		if ((bool)questMatch3)
		{
			questMatch3.OnWin += QuestMatch3Win;
		}
		winCondition.OnWin += Win;
		loseCondition.OnLose += Lose;
		actions.OnMoveStart += OnTileMoved;
	}

	public void QuestMatch3Win()
	{
		this.OnQuestWin();
		Invoke("Win", 0.6f);
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
			this.OnLose();
		}
	}

	private void InitComponents()
	{
		GameComponent[] find = UnityEngine.Object.FindObjectsOfType<GameComponent>();
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
		Invoke("RefreshTiles", 2f);
	}

	public Tile Find(Transform t)
	{
		return tilesInGame.FirstOrDefault((Tile tile) => tile.transform == t);
	}

	private void ShowDeck(List<Tile> spawned)
	{
		tilesInGame = spawned;
		spawnAnimation.SpawnAnimation(deck.LayersTiles());
		actions.Observe(deck.Tiles);
		RefreshTiles();
	}

	private void RefreshTiles()
	{
		box2DLocker.Refresh(deck.Layers);
	}

	private void OnValidate()
	{
	}
}
