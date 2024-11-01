using System.Linq;
using UnityEngine;

public class TileLockerBox2D : MonoBehaviour
{
    public bool enable;
    public void Refresh(DeckLayer[] layers)
    {
        if (!enable)
        {
            Debug.LogWarning("TileLocker is disabled");
            return;
        }

        for (var i = 0; i < layers.Length - 1; i++)
        {
            var layer = layers[i];
            var onTop = layers[i + 1];
            foreach (var tile in layer.Tiles)
            {
                var coverTiles = (from topTile in onTop.Tiles 
                    where topTile.CanCover
                    where IsCover(tile.Box, topTile.Box)
                    select topTile).ToList();

                tile.SetContacts(coverTiles);
            }
        }
    }

    bool IsCover(Box rect1, Box rect2)
    {
        var xOverlap = rect1.Position.x < rect2.Position.x + rect2.Width &&
                       rect1.Position.x + rect1.Width > rect2.Position.x;
        var yOverlap = rect1.Position.y < rect2.Position.y + rect2.Height &&
                       rect1.Position.y + rect1.Height > rect2.Position.y;
        return xOverlap && yOverlap;
    }
}

[System.Serializable]
public class Box
{
    public Vector2 Position; // Bottom-left corner position
    public float Width;
    public float Height;

    public Box(Vector2 position, float width, float height)
    {
        Position = position;
        Width = width;
        Height = height;
    }
}