using UnityEngine;

public class TileSlot : MonoBehaviour
{
	public int ID;

	public Tile Tile;

	public bool Busy => Tile;

	public bool IsEmpty => !Busy;

	public TileSO Type => Tile ? Tile.Type : null;

	public Vector2 Position => base.transform.position;

	public void Empty()
	{
		Tile = null;
	}

	public void Put(Tile tile)
	{
		Tile = tile;
		Tile.MoveTo(this);
	}
}
