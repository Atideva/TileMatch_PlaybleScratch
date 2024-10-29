using System.Linq;
using UnityEngine;

public class DeckLayer : MonoBehaviour
{
    public int id;
    Deck _deck;
    public TileSlot[] Slots { get; private set; }
    public bool AnyFreeSlot => Slots.Any(s => s.IsFree);

    public void Init(Deck deck)
    {
       // transform.localPosition += Vector3.forward * id;
        _deck = deck;
        FindSlots();
        InitSlots();
    }

    void InitSlots()
    {
        foreach (var slot in Slots)
            slot.Init(id);
    }

    void FindSlots()
    {
        Slots = GetComponentsInChildren<TileSlot>();
        //Debug.Log(name+": slots total "+ Slots.Length);
    }

    public TileSlot GetFreeSlot() 
        => Slots.FirstOrDefault(s => s.IsFree);
}