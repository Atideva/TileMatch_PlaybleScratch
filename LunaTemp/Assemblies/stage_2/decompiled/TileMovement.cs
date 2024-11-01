using System;
using UnityEngine;

public class TileMovement : MonoBehaviour
{
	public float speed = 20f;

	public bool _isMoving;

	private Tile _tile;

	private TileSlot _targetSlot;

	private Vector3 Destination => _targetSlot.Position;

	private bool HasArrive => Vector2.Distance(Position, Destination) < 0.01f;

	private Vector2 Position => _tile.Position;

	public event Action<TileSlot> OnMoveFinish = delegate
	{
	};

	public void SetTile(Tile tile)
	{
		_tile = tile;
	}

	public void MoveTo(TileSlot slot)
	{
		_targetSlot = slot;
		_tile.trail.sortingOrder = 10000;
		_tile.background.sortingOrder = 10001;
		_tile.icon.sortingOrder = 10002;
		_isMoving = true;
	}

	private void Update()
	{
		if (_isMoving)
		{
			_tile.transform.position = Vector3.MoveTowards(Position, Destination, speed * Time.deltaTime);
			if (HasArrive)
			{
				StopMove();
			}
		}
	}

	private void StopMove()
	{
		_tile.transform.position = Destination;
		_isMoving = false;
		this.OnMoveFinish(_targetSlot);
	}
}
