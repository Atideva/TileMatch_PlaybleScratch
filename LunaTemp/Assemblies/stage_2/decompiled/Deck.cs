using System.Collections.Generic;
using System.Linq;

public class Deck : GameComponent
{
	private List<Tile> _tiles = new List<Tile>();

	public DeckLayer[] Layers { get; private set; }

	public List<Tile> Tiles
	{
		get
		{
			if (_tiles.Count > 0)
			{
				return _tiles;
			}
			_tiles = Layers.SelectMany((DeckLayer layer) => layer.Tiles).ToList();
			return _tiles;
		}
	}

	public List<List<Tile>> LayersTiles()
	{
		return Layers.Select((DeckLayer layer) => layer.Tiles.ToList()).ToList();
	}

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
			int layerID = (i + 1) * 1000;
			layer.Init(this, layerID);
		}
	}
}
