using System.Collections.Generic;
using System.Linq;

public class Deck : GameComponent
{
    public DeckLayer[] Layers { get; private set; }
    public List<Tile> Tiles => Layers.SelectMany(layer => layer.Tiles).ToList();
    public List<Tile> FirstLayer => Layers[0].Tiles.ToList();
    public List<Tile> SecondLayer => Layers[1].Tiles.ToList();

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
            var layerID = (i+1) * 100;
            layer.Init(this, layerID);
        }
    }
}