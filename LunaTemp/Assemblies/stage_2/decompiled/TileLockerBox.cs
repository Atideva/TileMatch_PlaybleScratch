using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileLockerBox : MonoBehaviour
{
	public bool enable;

	public void Refresh(DeckLayer[] layers)
	{
		if (!enable)
		{
			Debug.LogWarning("TileLocker is disabled");
			return;
		}
		for (int i = 0; i < layers.Length - 1; i++)
		{
			DeckLayer layer = layers[i];
			DeckLayer onTop = layers[i + 1];
			Tile[] tiles = layer.Tiles;
			foreach (Tile tile in tiles)
			{
				List<Tile> coverTiles = (from topTile in onTop.Tiles
					where !topTile.InBag
					where !topTile.IsMoving
					where IsCover(tile.Box, topTile.Box)
					select topTile).ToList();
				tile.SetContacts(coverTiles);
			}
		}
	}

	private bool DoesntCover(Box rect1, Box rect2)
	{
		return !IsCover(rect1, rect2);
	}

	private bool IsCover(Box rect1, Box rect2)
	{
		bool xOverlap = rect1.Position.x < rect2.Position.x + rect2.Width && rect1.Position.x + rect1.Width > rect2.Position.x;
		bool yOverlap = rect1.Position.y < rect2.Position.y + rect2.Height && rect1.Position.y + rect1.Height > rect2.Position.y;
		return xOverlap && yOverlap;
	}
}
