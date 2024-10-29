using System;
using System.Collections.Generic;
using UnityEngine;

[ExecuteAlways]
public class Tile : MonoBehaviour
{
	[Space(20f)]
	public TileSO Type;

	public TileSO lastType;

	[Space(20f)]
	public SpriteRenderer icon;

	public SpriteRenderer disabledTile;

	public SpriteRenderer background;

	public TrailRenderer trail;

	[Space(20f)]
	public Vector3 defaultSize = Vector3.one;

	public float speed;

	public float spawnAnimSize = 1.5f;

	public float spawnAnimDuration = 0.3f;

	[Space(20f)]
	public List<Tile> coverTiles = new List<Tile>();

	private bool _isSpawnAnimation;

	private float _spawnTimer = 0f;

	private Vector3 _targetPosition;

	private float _timer;

	private bool _isMoving;

	private TileSlot _targetSlot;

	public bool _isClickable;

	private int iconSort;

	private int backGroundSort;

	private int disabledSort;

	private int trailSort;

	public bool IsInit;

	private int _line;

	public int Layer { get; private set; }

	public bool IsClickable => _isClickable && !_isMoving && !InBag;

	public bool InBag { get; private set; }

	public Vector2 Position => base.transform.position;

	public bool IsMoving => _isMoving;

	public float Y => base.transform.position.y;

	private bool Arrive => Vector2.Distance(base.transform.position, _targetPosition) < 0.01f;

	public event Action<Tile, TileSlot> OnMoveFinish = delegate
	{
	};

	private void Awake()
	{
		IsInit = false;
	}

	private void RefreshEditor()
	{
		if (!Application.isPlaying && !(lastType == Type))
		{
			lastType = Type;
			Refresh(Type);
		}
	}

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
			else
			{
				Enable();
			}
		}
	}

	public void MoveTo(TileSlot slot)
	{
		trail.sortingOrder = 1000;
		background.sortingOrder = 1001;
		icon.sortingOrder = 1002;
		_targetSlot = slot;
		_targetPosition = slot.Position;
		_isMoving = true;
	}

	public void SetLayer(int layer, int lineID)
	{
		_line = lineID;
		Layer = layer;
		trailSort = Layer + _line;
		backGroundSort = Layer + _line + 1;
		iconSort = Layer + _line + 2;
		disabledSort = Layer + _line + 3;
		Refresh();
	}

	private void Refresh()
	{
		trail.sortingOrder = trailSort;
		background.sortingOrder = backGroundSort;
		icon.sortingOrder = iconSort;
		disabledTile.sortingOrder = disabledSort;
	}

	private void StopMove()
	{
		base.transform.position = _targetPosition;
		_isMoving = false;
		Refresh();
		this.OnMoveFinish(this, _targetSlot);
	}

	private void Update()
	{
		RefreshEditor();
		if (_isMoving)
		{
			base.transform.position = Vector3.MoveTowards(Position, _targetPosition, speed * Time.deltaTime);
			if (Arrive)
			{
				StopMove();
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

	public void Set(TileSO so)
	{
		Refresh(so);
		Enable();
		IsInit = true;
	}

	private void Refresh(TileSO so)
	{
		string soName = (so ? so.name : "");
		base.gameObject.name = "Tile - " + soName;
		icon.sprite = (so ? so.Icon : null);
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
		if (Application.isPlaying)
		{
			base.gameObject.SetActive(false);
		}
	}

	public void Show()
	{
		if (Application.isPlaying)
		{
			base.gameObject.SetActive(true);
		}
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
