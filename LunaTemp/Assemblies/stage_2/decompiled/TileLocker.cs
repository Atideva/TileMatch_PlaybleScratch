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
		Debug.LogWarning("TILES" + tiles.Count);
		for (int i = 0; i < layers.Length - 1; i++)
		{
			DeckLayer layer = layers[i];
			int current = layer.id;
			int onTop = layers[i + 1].id;
			Debug.LogWarning("Current: " + current + ", onTop:" + onTop);
			foreach (Tile tile in tiles.Where((Tile t) => t.Layer == current).ToList())
			{
				List<Tile> topTiles = tiles.Where((Tile t) => t.Layer == onTop).ToList();
				Debug.Log("Top tiles: " + topTiles.Count);
				List<Tile> coverTiles = topTiles.Where((Tile t) => Vector2.Distance(tile.Position, t.Position) <= lockDistance).ToList();
				Debug.LogWarning("coverTiles tiles: " + coverTiles.Count);
				tile.SetContacts(coverTiles);
			}
		}
	}
}
