using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Deck : GameComponent
{
    public DeckLayer[] Layers { get; private set; }
    public List<TileSlot> Slots => Layers.SelectMany(layer => layer.Slots).ToList();
    public List<TileSlot> FirstLayer => Layers[0].Slots.ToList();
    public List<TileSlot> SecondLayer => Layers[1].Slots.ToList();

    protected override void OnInit()
    {
        FindPlatforms();
        InitPlatforms();
    }

    void FindPlatforms()
    {
        Layers = GetComponentsInChildren<DeckLayer>();
        //Debug.Log("Layers total: " + Layers.Length);
    }

    void InitPlatforms()
    {
        foreach (var layer in Layers)
        {
            layer.Init(this);
        }
    }
}