using System;
using System.Collections.Generic;
using UnityEngine;

public class Tile : MonoBehaviour
{
	public SpriteRenderer icon;

	public SpriteRenderer disabledTile;

	public List<Tile> coverTiles = new List<Tile>();

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

	private TileSlot _targetSlot;

	public bool _isClickable;

	public bool IsInit;

	public int Layer { get; private set; }

	public bool IsClickable => _isClickable && !_isMoving;

	public TileData Data { get; private set; }

	public bool InBag { get; private set; }

	public Vector2 Position => base.transform.position;

	public event Action<Tile, TileSlot> OnMoveFinish = delegate
	{
	};

	public void SetContacts(List<Tile> cover)
	{
		if (cover != null)
		{
			coverTiles.Clear();
			coverTiles = cover;
			if (cover.Count > 0)
			{
				Disable();
			}
		}
	}

	public void MoveTo(TileSlot slot)
	{
		icon.sortingOrder = 1000;
		background.sortingOrder = 1000;
		_targetSlot = slot;
		_targetPosition = slot.Position;
		float distance = Vector2.Distance(Position, _targetPosition);
		_isMoving = true;
	}

	public void SetLayer(int layer)
	{
		Layer = layer;
		background.sortingOrder = Layer;
		icon.sortingOrder = Layer + 1;
		disabledTile.sortingOrder = Layer + 2;
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
				icon.sortingOrder = 0;
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

	public void Set(TileData data)
	{
		Data = data;
		icon.sprite = data.tile.Icon;
		Enable();
		IsInit = true;
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

	public void Hide()
	{
		base.gameObject.SetActive(false);
	}

	public void Show()
	{
		base.gameObject.SetActive(true);
	}

	public void Enable()
	{
		_isClickable = true;
		disabledTile.gameObject.SetActive(false);
	}

	public void Disable()
	{
		_isClickable = false;
		disabledTile.gameObject.SetActive(true);
	}
}
