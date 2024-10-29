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
			int current = layer.Layer;
			int onTop = layers[i + 1].Layer;
			foreach (Tile tile in tiles.Where((Tile t) => t.Layer == current).ToList())
			{
				List<Tile> coverTiles = (from t in tiles
					where t.Layer == onTop
					where !t.IsMoving
					where !t.InBag
					where Vector2.Distance(tile.Position, t.Position) <= lockDistance
					select t).ToList();
				tile.SetContacts(coverTiles);
			}
		}
	}
}
