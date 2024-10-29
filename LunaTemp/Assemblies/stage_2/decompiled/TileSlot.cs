using UnityEngine;

public class TileSlot : MonoBehaviour
{
	public int ID;

	public Tile Tile;

	public bool Busy => Data != null;

	public bool IsEmpty => !Busy;

	public TileData Data => Tile ? Tile.Data : null;

	public TileSO Type => Tile ? Tile.Data.tile : null;

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
