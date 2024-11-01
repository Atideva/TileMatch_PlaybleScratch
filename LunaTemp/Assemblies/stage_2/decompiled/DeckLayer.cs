using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class DeckLayer : MonoBehaviour
{
	public int layer;

	private Deck _deck;

	public Tile[] Tiles;

	public void Init(Deck deck, int layerID)
	{
		Vector3 pos = base.transform.position;
		base.transform.position = new Vector3(pos.x, pos.y, layerID);
		_deck = deck;
		FindTiles();
		InitTiles(deck.Game, layerID);
	}

	private void InitTiles(Game game, int layerID)
	{
		layer = layerID;
		List<List<Tile>> groupedByYPosition = (from tile in Tiles
			orderby tile.Y descending
			group tile by tile.Y into @group
			select @group.ToList()).ToList();
		for (int i = 0; i < groupedByYPosition.Count; i++)
		{
			int lineId = i * 10;
			List<Tile> group2 = groupedByYPosition[i];
			foreach (Tile tile2 in group2)
			{
				tile2.SetLayer(layer, lineId);
				tile2.SetGame(game);
				tile2.Unlock();
				tile2.Hide();
			}
		}
	}

	private void FindTiles()
	{
		Tiles = GetComponentsInChildren<Tile>();
	}
}
