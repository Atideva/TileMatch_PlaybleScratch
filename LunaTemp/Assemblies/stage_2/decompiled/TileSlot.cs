using System;
using UnityEngine;

public class TileSlot : MonoBehaviour
{
	public SpriteRenderer background;

	public Vector3 defaultSize = Vector3.one;

	public float speed;

	public float spawnAnimSize = 1.5f;

	public float spawnAnimDuration = 0.3f;

	public float moveDuration = 0.5f;

	private bool _isSpawnAnimation;

	private float _spawnTimer = 0f;

	private Vector3 _targetPosition;

	private float _timer;

	private bool _isMoving;

	private BagSlot _targetSlot;

	public int Layer { get; private set; }

	public bool IsClickable => (bool)Tile && Tile.IsClickable && !_isMoving;

	public bool IsFree => !Tile;

	public Tile Tile { get; private set; }

	public TileData Data => Tile.Data;

	public Vector2 Position => base.transform.position;

	public bool InBag { get; private set; }

	public event Action<TileSlot, BagSlot> OnMoveFinish = delegate
	{
	};

	public void MoveTo(BagSlot slot)
	{
		Tile.icon.sortingOrder = 1000;
		background.sortingOrder = 1000;
		_targetSlot = slot;
		_targetPosition = slot.Position;
		float distance = Vector2.Distance(Position, _targetPosition);
		_isMoving = true;
	}

	public void Init(int id)
	{
		Layer = id;
		background.sortingOrder = Layer;
		if (Application.isPlaying)
		{
		}
	}

	private void Update()
	{
		if (_isMoving)
		{
			base.transform.position = Vector3.MoveTowards(Position, _targetPosition, speed * Time.deltaTime);
			if (Vector3.Distance(base.transform.position, _targetPosition) < 0.01f)
			{
				base.transform.position = _targetPosition;
				_isMoving = false;
				Tile.icon.sortingOrder = 0;
				background.sortingOrder = 0;
				this.OnMoveFinish(this, _targetSlot);
			}
		}
		if (_isSpawnAnimation)
		{
			_spawnTimer += Time.deltaTime;
			float progress = _spawnTimer / spawnAnimDuration;
			if (progress <= 0.5f)
			{
				float scale2 = Mathf.Lerp(0f, spawnAnimSize, progress * 2f);
				base.transform.localScale = defaultSize * scale2;
			}
			else if (progress <= 1f)
			{
				float scale = Mathf.Lerp(spawnAnimSize, 1f, (progress - 0.5f) * 2f);
				base.transform.localScale = defaultSize * scale;
			}
			else
			{
				base.transform.localScale = defaultSize;
				_isSpawnAnimation = false;
			}
		}
	}

	public void Put(Tile put)
	{
		Tile = put;
		Tile.icon.sortingOrder = Layer + 1;
		Tile.disabledTile.sortingOrder = Layer + 2;
		Tile.SetSlot(this);
	}

	public void SpawnAnimation()
	{
		base.transform.localScale = Vector3.zero;
		_isSpawnAnimation = true;
		Show();
	}

	public void PutInBag()
	{
		InBag = true;
	}

	public void Empty()
	{
		Tile = null;
	}

	public void Hide()
	{
		base.gameObject.SetActive(false);
	}

	public void Show()
	{
		base.gameObject.SetActive(true);
	}
}
