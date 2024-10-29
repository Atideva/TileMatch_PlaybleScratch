using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Game : MonoBehaviour
{
    [Space(20)]
    [SerializeField] float autoGameOverInSeconds = 30;
    [Space(20)]
    [SerializeField] Deck deck;
    [SerializeField] TileActions actions;
    [SerializeField] TileLocker locker;
    [SerializeField] TilesBag bag;
    [SerializeField] TileSpawnAnimation spawnAnimation;
    [SerializeField] TileMatcher tileMatcher;
    [SerializeField] LoseCondition loseCondition;
    [SerializeField] WinCondition winCondition;
    [SerializeField] InputTouch input;
    [SerializeField] EndCard endCard;
    [SerializeField] Quest quest;
    [Space]
    [SerializeField] bool useRandom;
    [SerializeField] TileRandomSpawner spawnRandom;
    [Space(20)]
    [SerializeField] int tileToSpawn;
    [SerializeField] int tilesInScene;
    [SerializeField] List<Tile> tilesInGame = new();

    public IReadOnlyList<Tile> TilesInGame => tilesInGame;
    public TilesBag Bag => bag;
    public TileMatcher TileMatcher => tileMatcher;
    public InputTouch Input => input;
    public TileActions Actions => actions;
    bool _isGameEnded;

    void Start()
    {
        InitComponents();
        Invoke(nameof(Win), autoGameOverInSeconds);
        Invoke(useRandom ? nameof(Spawn) : nameof(StartGame), 0.01f);

        quest.OnWin += QuestWin;
        winCondition.OnWin += Win;
        loseCondition.OnLose += Lose;
        actions.OnMoveStart += OnTileMoved;
    }

    void QuestWin()
    {
        if (_isGameEnded) return;
        _isGameEnded = true;
        Invoke(nameof(Win), 1f);
    }

    void OnTileMoved(Tile obj)
    {
        RefreshTiles();
    }

    void Win()
    {
        if (_isGameEnded) return;
        _isGameEnded = true;

        endCard.Show();
        actions.Disable();
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Analytics.LogEvent("Game win", 0);
        Debug.Log("Game win!");
    }

    public void OpenURL()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    void Lose()
    {
        if (_isGameEnded) return;
        _isGameEnded = true;

        endCard.Show();
        actions.Disable();
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Analytics.LogEvent("Game lose", 0);
        Debug.Log("Game lose!");
    }

    void InitComponents()
    {
        var find = FindObjectsOfType<GameComponent>();
        foreach (var component in find)
            component.Init(this);
    }

    void Spawn()
    {
        spawnRandom.Spawn(deck.Tiles);
        spawnRandom.OnSpawnFinish += ShowDeck;
    }

    void StartGame()
    {
        ShowDeck(deck.Tiles);
    }

    void ShowDeck(List<Tile> spawned)
    {
//        Debug.LogError("SHOW deck ");
        tilesInGame = spawned;
        spawnAnimation.SpawnAnimation(deck.FirstLayer, deck.SecondLayer);
        actions.Observe(deck.Tiles);
        RefreshTiles();
    }

    void RefreshTiles() => locker.Refresh(tilesInGame, deck.Layers);

    void OnValidate()
    {
        if (Application.isPlaying) return;
        InitComponents();
        //  tileToSpawn = spawnRandom.TotalTiles;
        tilesInScene = deck.Layers.Sum(p => p.Tiles.Length);
    }

}