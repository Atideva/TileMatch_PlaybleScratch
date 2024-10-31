using System.Collections.Generic;
using System.Linq;

public class Deck : GameComponent
{
    public DeckLayer[] Layers { get; private set; }
    public List<Tile> Tiles
    {
        get
        {
            if (_tiles.Count > 0) return _tiles;
            _tiles = Layers.SelectMany(layer => layer.Tiles).ToList();
            return _tiles;
        }
    }
    List<Tile> _tiles = new();

    public List<List<Tile>> LayersTiles()
        => Layers.Select(layer => layer.Tiles.ToList()).ToList();

    protected override void OnInit()
    {
        FindLayers();
        InitLayers();
    }

    void FindLayers()
        => Layers = GetComponentsInChildren<DeckLayer>();

    void InitLayers()
    {
        for (var i = 0; i < Layers.Length; i++)
        {
            var layer = Layers[i];
            var layerID = (i + 1) * 1000;
            layer.Init(this, layerID);
        }
    }
}