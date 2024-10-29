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
		for (int i = 0; i < layers.Length - 1; i++)
		{
			DeckLayer layer = layers[i];
			int current = layer.layer;
			int onTop = layers[i + 1].layer;
			foreach (Tile tile in tiles.Where((Tile t) => t.Layer == current).ToList())
			{
				List<Tile> topTiles = tiles.Where((Tile t) => t.Layer == onTop).ToList();
				List<Tile> coverTiles = topTiles.Where((Tile t) => Vector2.Distance(tile.Position, t.Position) <= lockDistance).ToList();
				tile.SetContacts(coverTiles);
			}
		}
	}
}
