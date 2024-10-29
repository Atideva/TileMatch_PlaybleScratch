using System.Collections.Generic;
using System.Linq;

public class Deck : GameComponent
{
	public DeckLayer[] Layers { get; private set; }

	public List<TileSlot> Slots => Layers.SelectMany((DeckLayer layer) => layer.Slots).ToList();

	public List<TileSlot> FirstLayer => Layers[0].Slots.ToList();

	public List<TileSlot> SecondLayer => Layers[1].Slots.ToList();

	protected override void OnInit()
	{
		FindPlatforms();
		InitPlatforms();
	}

	private void FindPlatforms()
	{
		Layers = GetComponentsInChildren<DeckLayer>();
	}

	private void InitPlatforms()
	{
		DeckLayer[] layers = Layers;
		foreach (DeckLayer layer in layers)
		{
			layer.Init(this);
		}
	}
}
