using System.Linq;
using UnityEngine;

public class DeckLayer : MonoBehaviour
{
	public int id;

	private Deck _deck;

	public TileSlot[] Slots { get; private set; }

	public bool AnyFreeSlot => Slots.Any((TileSlot s) => s.IsFree);

	public void Init(Deck deck)
	{
		_deck = deck;
		FindSlots();
		InitSlots();
	}

	private void InitSlots()
	{
		TileSlot[] slots = Slots;
		foreach (TileSlot slot in slots)
		{
			slot.Init(id);
		}
	}

	private void FindSlots()
	{
		Slots = GetComponentsInChildren<TileSlot>();
	}

	public TileSlot GetFreeSlot()
	{
		return Slots.FirstOrDefault((TileSlot s) => s.IsFree);
	}
}
