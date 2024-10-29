using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileLocker : GameComponent
{

    public float lockDistance;

    protected override void OnInit()
    {
    }

    public void Refresh(List<Tile> tiles, DeckLayer[] layers)
    {
        //Debug.LogWarning("TILES" + tiles.Count);

        for (var i = 0; i < layers.Length - 1; i++)
        {
            var layer = layers[i];
            var current = layer.id;
            var onTop = layers[i + 1].id;
            //Debug.LogWarning("Current: " + current + ", onTop:" + onTop);

            foreach (var tile in tiles.Where(t => t.Layer == current).ToList())
            {
                var topTiles = tiles.Where(t => t.Layer == onTop).ToList();
                //Debug.Log("Top tiles: " + topTiles.Count);

                var coverTiles = topTiles.Where(t => Vector2.Distance(tile.Position, t.Position) <= lockDistance).ToList();
                //Debug.LogWarning("coverTiles tiles: " + coverTiles.Count);

                tile.SetContacts(coverTiles);
            }
        }
    }

}