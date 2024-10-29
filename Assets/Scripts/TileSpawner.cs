using System;
using System.Collections.Generic;

public class TileSpawner : GameComponent
{
   // [SerializeField] List<TileData> level = new();
    public Tile prefab;
    public List<Tile> spawned = new();
    //public List<TileData> Level => level;

    protected override void OnInit()
    {
    }

    /*public void Spawn(List<TileData> tiles, DeckLayer[] layers)
    {
        var tilez = tiles.Sum(t => t.amount);
        var slots = layers.Sum(p => p.Tiles.Length);
        if (tilez != slots)
        {
            Debug.LogError("Tiles amount should be equals bricks amount on scene");
            Debug.LogError("Tiles: " + tilez + ", Slots" + slots);
        }
        else
        {
            StartCoroutine(RunSpawn(tiles, layers));
        }
    }*/

    public bool hideAtSpawn = true;

    /*
    IEnumerator RunSpawn(List<TileData> tileData, DeckLayer[] layers)
    {
        /*
        spawned.Clear();

        var total = tileData.Sum(t => t.amount);

        for (int i = 0; i < total; i++)
        {
            var layer = GetRandom(layers);
            var empty = layer.GetFreeSlot();
            if (empty == null)
            {
                Debug.LogWarning("Why theres no empty slots?");
                continue;
            }
            
            var data = GetRandom(tileData);
            data.Decrease();

            var tile = Instantiate(prefab );
            tile.Set(data, layer.id);
                
            empty.Set(tile);
            if (hideAtSpawn) empty.Hide();

            spawned.Add(tile);
            yield return new WaitForSeconds(1 / spawnRate);
        }
        #1#
        yield return new WaitForSeconds(1 / spawnRate);
        OnSpawnFinish(spawned);
    }
    */

    public float spawnRate;
    public event Action<List<Tile>> OnSpawnFinish = delegate { };

    /*TileData GetRandom(List<TileData> data)
    {
        var onlyFree = data.Where(p => p.CanSpawn);
        var r =
            Random.Range(0, onlyFree.Count());
        return data[r];
    }*/

    /*DeckLayer GetRandom(DeckLayer[] layers)
    {
        var onlyFree = layers.Where(p => p.AnyFreeSlot);
        var r = Random.Range(0, onlyFree.Count());
        return layers[r];
    }*/

}