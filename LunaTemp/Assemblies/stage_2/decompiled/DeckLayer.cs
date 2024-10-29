using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class DeckLayer : MonoBehaviour
{
	private Deck _deck;

	public Tile[] Tiles;

	public int Layer { get; private set; }

	public void Init(Deck deck, int layer)
	{
		Vector3 pos = base.transform.position;
		base.transform.position = new Vector3(pos.x, pos.y, layer);
		_deck = deck;
		InitTiles(layer);
	}

	private void InitTiles(int layer)
	{
		Layer = layer;
		List<List<Tile>> groupedByYPosition = (from tile in Tiles
			group tile by tile.Y into @group
			select @group.ToList()).ToList();
		for (int i = 0; i < groupedByYPosition.Count; i++)
		{
			int lineId = i * 10;
			List<Tile> group2 = groupedByYPosition[i];
			foreach (Tile tile2 in group2)
			{
				tile2.SetLayer(Layer, lineId);
				tile2.Hide();
			}
		}
	}
}
