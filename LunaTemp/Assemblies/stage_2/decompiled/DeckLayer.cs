using UnityEngine;

public class DeckLayer : MonoBehaviour
{
	public int layer;

	private Deck _deck;

	public Tile[] Tiles { get; private set; }

	public void Init(Deck deck)
	{
		_deck = deck;
		FindTiles();
		InitTiles();
	}

	private void InitTiles()
	{
		Tile[] tiles = Tiles;
		foreach (Tile tile in tiles)
		{
			tile.SetLayer(layer);
		}
	}

	private void FindTiles()
	{
		Tiles = GetComponentsInChildren<Tile>();
	}
}
