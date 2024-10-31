using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileLocker : GameComponent
{
	public new bool enabled;

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
		for (int i = 0; i < layers.Length - 1; i++)
		{
			DeckLayer layer = layers[i];
			int current = layer.layer;
			int onTop = layers[i + 1].layer;
			foreach (Tile tile in tiles.Where((Tile t) => t.layer == current).ToList())
			{
				List<Tile> coverTiles = (from t in tiles
					where t.layer == onTop
					where !t.IsMoving
					where !t.InBag
					where Vector2.Distance(tile.Position, t.Position) <= lockDistance
					select t).ToList();
				tile.SetContacts(coverTiles);
			}
		}
	}
}
