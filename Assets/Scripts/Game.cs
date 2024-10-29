using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.Serialization;

public class Game : MonoBehaviour
{
    [SerializeField] Deck deck;
    [SerializeField] TileSpawner spawner;
    [SerializeField] TileActions actions;
    [SerializeField] TileLocker locker;
    [SerializeField] TilesBag bag;
    [SerializeField] TileSpawnAnimation spawnAnimation;
    [SerializeField] MatchCondition matchCondition;
    [SerializeField] LoseCondition loseCondition;
    [SerializeField] WinCondition winCondition;
    [SerializeField] InputTouch input;

    [Space(20)]
    [SerializeField] int totalTiles;
    [SerializeField] int totalBricks;
    [SerializeField] bool randomTiles;
    [SerializeField] List<Tile> tiles = new();
    public  IReadOnlyList<Tile> Tiles => tiles;
   public  IReadOnlyList<TileData> LevelData => spawner.Level;
    public TilesBag Bag => bag;
    public MatchCondition MatchCondition => matchCondition;
    public InputTouch Input => input;

    void Start()
    {
        InitComponents();
        Invoke(nameof(Spawn), 0.1f);
    }

    void InitComponents()
    {
        var find = FindObjectsOfType<GameComponent>();
        foreach (var component in find)
            component.Init(this);
    }

    void Spawn()
    {
        spawner.Spawn(LevelData.ToList(), deck.Layers);
        spawner.OnSpawnFinish += Spawned;
    }

    void Spawned(List<Tile> tiles)
    {
        
        this.tiles = tiles;
        spawnAnimation.SpawnAnimation(deck.FirstLayer, deck.SecondLayer);
        actions.Observe(deck.Slots);
        locker.Refresh(tiles, deck.Layers);
    }

    void OnValidate()
    {
        InitComponents();
        totalTiles = spawner.Level.Sum(t => t.amount);
        totalBricks = deck.Layers.Sum(p => p.Slots.Length);
    }
}