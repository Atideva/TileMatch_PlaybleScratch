using System.Linq;
using UnityEngine;

public class DeckLayer : MonoBehaviour
{
    public int id;
    Deck _deck;
    public Tile[] Slots { get; private set; }

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
        Slots = GetComponentsInChildren<Tile>();
        //Debug.Log(name+": slots total "+ Slots.Length);
    }
}