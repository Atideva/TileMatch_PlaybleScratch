using System;
using UnityEngine;
using UnityEngine.Serialization;

public class BagSlot : MonoBehaviour
{
    [FormerlySerializedAs("Slot")] public TileSlot TileSlot;
    public TileSlot bookedSlot;
    public bool Busy => Data != null;
    public bool IsFree => !Busy && !Booked;
    public TileData Data => TileSlot ? TileSlot.Data : null;
    public Vector2 Position => transform.position;
    bool Booked => bookedSlot;

    void Awake()
    {
        Empty();
    }

    public void Book(TileSlot slot)
    {
        bookedSlot = slot;
    }

    public void StopBooking()
    {
        bookedSlot = null;
    }

    public void Empty()
    {
        TileSlot = null;
    }

    public void Put(TileSlot slot)
    {
        TileSlot = slot;
        StopBooking();
    }
}