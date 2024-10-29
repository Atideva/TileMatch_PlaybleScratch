using System.Collections.Generic;
using System.Linq;

public class Deck : GameComponent
{
	public DeckLayer[] Layers { get; private set; }

	public List<Tile> Tiles => Layers.SelectMany((DeckLayer layer) => layer.Tiles).ToList();

	public List<Tile> FirstLayer => Layers[0].Tiles.ToList();

	public List<Tile> SecondLayer => Layers[1].Tiles.ToList();

	protected override void OnInit()
	{
		FindLayers();
		InitLayers();
	}

	private void FindLayers()
	{
		Layers = GetComponentsInChildren<DeckLayer>();
	}

	private void InitLayers()
	{
		for (int i = 0; i < Layers.Length; i++)
		{
			DeckLayer layer = Layers[i];
			int layerID = (i + 1) * 100;
			layer.Init(this, layerID);
		}
	}
}
