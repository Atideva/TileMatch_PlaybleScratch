using UnityEngine;

public class BagSlot : MonoBehaviour
{
	public int ID;

	public TileSlot TileSlot;

	public TileSlot bookedSlot;

	public bool Busy => Data != null;

	public bool IsEmpty => !Busy;

	public bool IsFree => !Busy && !Booked;

	public TileData Data => TileSlot ? TileSlot.Data : null;

	public Vector2 Position => base.transform.position;

	private bool Booked => bookedSlot;

	private void Awake()
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
