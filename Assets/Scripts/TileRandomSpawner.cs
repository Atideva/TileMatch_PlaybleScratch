using System;
using System.Collections.Generic;

public class TileRandomSpawner : GameComponent
{
    /*[SerializeField] List<TileData> level = new();*/
    public float spawnRate;
    public event Action<List<Tile>> OnSpawnFinish = delegate { };
   // public int TotalTiles => level.Sum(d => d.amount);

    protected override void OnInit()
    {
    }

    public void Spawn(List<Tile> tiles)
    {
        /*if (TotalTiles != tiles.Count)
        {
            Debug.LogError("Tiles amount should be equals bricks amount on scene");
            Debug.LogError("Tiles: " + TotalTiles + ", Slots" + tiles.Count);
        }
        else
        {
            /*StartCoroutine(RunSpawn(tiles));#1#
        }*/
    }

    /*
    Tile GetRandomEmpty(List<Tile> tiles)
    {
        var empty = tiles.Where(t => !t.isInit).ToList();
        return empty[Random.Range(0, empty.Count)];
    }
    */

    /*IEnumerator RunSpawn(List<Tile> tiles)
    {
        spawned.Clear();
        foreach (var tile in tiles)
            tile.Hide();
        
        
        Debug.LogError("Total: "+TotalTiles);
        for (int i = 0; i < TotalTiles; i++)
        {
            var tile = GetRandomEmpty(tiles);
            if (!tile)
            {
                Debug.LogWarning("Why theres no empty slot?");
                continue;
            }

            var data = BookRandom();
            tile.Set(data);
            spawned.Add(tile);
            yield return new WaitForSeconds(1 / spawnRate);
        }

        yield return new WaitForSeconds(1 / spawnRate);
        OnSpawnFinish(spawned);
    }*/

    public List<Tile> spawned = new();

    /*TileData BookRandom()
    {
        var onlyFree = level.Where(p => p.CanSpawn);
        var r =
            Random.Range(0, onlyFree.Count());
        level[r].Spawned();
        return level[r];
    }*/

}