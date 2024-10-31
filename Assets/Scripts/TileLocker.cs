using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileLocker : GameComponent
{
    public bool enabled;
    public float lockDistance;

    protected override void OnInit()
    {
    }

    public void Refresh(List<Tile> tiles, DeckLayer[] layers)
    {
        if (!enabled)
        {
            Debug.LogWarning("TileLocker is disabled");
            return;
        }
        
        for (var i = 0; i < layers.Length - 1; i++)
        {
            var layer = layers[i];
            var current = layer.layer;
            var onTop = layers[i + 1].layer;
            //Debug.LogWarning("Current: " + current + ", onTop:" + onTop);

            foreach (var tile in tiles.Where(t => t.layer == current).ToList())
            {
                var coverTiles = tiles
                    .Where(t => t.layer == onTop)
                    .Where(t => !t.IsMoving)
                    .Where(t => !t.InBag)
                    .Where(t => Vector2.Distance(tile.Position, t.Position) <= lockDistance)
                    .ToList();

                /*
                if (coverTiles.Count > 0)
                    Debug.Log("Covered " + tile.name, tile.gameObject);*/

                //Debug.LogWarning("coverTiles tiles: " + coverTiles.Count);

                tile.SetContacts(coverTiles);
            }
        }
    }

}