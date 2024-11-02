using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

[ExecuteAlways]
public class Tile : MonoBehaviour
{
	[FormerlySerializedAs("Type")]
	[Space(20f)]
	[SerializeField]
	private TileSO type;

	[Space(20f)]
	public int layer;

	public int line;

	[Space(20f)]
	public SpriteRenderer icon;

	public SpriteRenderer lockTile;

	public SpriteRenderer background;

	public TrailRenderer trail;

	[Space(20f)]
	[SerializeField]
	private Box box;

	[SerializeField]
	private TileMovement movement;

	[FormerlySerializedAs("fadeAnim")]
	[SerializeField]
	private TileLockAnimation lockAnim;

	[Space(20f)]
	public bool locked;

	public bool isHidden;

	[SerializeField]
	private int iconSort;

	[SerializeField]
	private int backGroundSort;

	[SerializeField]
	private int disabledSort;

	[SerializeField]
	private int trailSort;

	[SerializeField]
	private List<Tile> coverTiles = new List<Tile>();

	private TileSO _lastType;

	private float _timer;

	private float _fadeTimer;

	private float _fadeFrom;

	private float _fadeTo;

	private float fadeSpeed = 1f;

	public bool debug;

	private Game _game;

	public AnimationScale spawnAnim;

	private bool _isMoving => movement._isMoving;

	public Box Box => new Box(Position + box.Position, box.Width, box.Height);

	public TileSO Type => type;

	public bool IsClickable => !locked && !_isMoving && !InBag;

	public bool InBag { get; private set; }

	public Vector2 Position => base.transform.position;

	public bool IsMoving => _isMoving;

	public bool CanCover => !IsMoving && !InBag;

	public float Y => base.transform.position.y;

	public event Action<Tile, TileSlot> OnMoveFinish = delegate
	{
	};

	public event Action OnMoveStart = delegate
	{
	};

	private void RefreshLock()
	{
		if (coverTiles.Count > 0)
		{
			Lock();
		}
		else
		{
			Unlock();
		}
	}

	private void RefreshInEditor()
	{
		if (!Application.isPlaying && !(_lastType == type))
		{
			_lastType = type;
			Refresh(type);
		}
	}

	public void SetContacts(List<Tile> covers)
	{
		if (covers != null)
		{
			coverTiles = covers;
			RefreshLock();
		}
	}

	public void MoveTo(TileSlot slot)
	{
		this.OnMoveStart();
		movement.MoveTo(slot);
		movement.OnMoveFinish += MovementFinished;
	}

	private void MovementFinished(TileSlot toSlot)
	{
		Refresh();
		this.OnMoveFinish(this, toSlot);
	}

	public void SetGame(Game game)
	{
		_game = game;
	}

	public void SetLayer(int l, int lineID)
	{
		movement.SetTile(this);
		lockAnim.SetTile(this);
		line = lineID;
		layer = l;
		trailSort = layer + line;
		backGroundSort = layer + line + 1;
		iconSort = layer + line + 2;
		disabledSort = layer + line + 3;
		Refresh();
	}

	private void Refresh()
	{
		trail.sortingOrder = trailSort;
		background.sortingOrder = backGroundSort;
		icon.sortingOrder = iconSort;
		lockTile.sortingOrder = disabledSort;
	}

	private void Update()
	{
		RefreshInEditor();
	}

	private void Refresh(TileSO so)
	{
		string soName = (so ? so.name : "");
		base.gameObject.name = "Tile - " + soName;
		icon.sprite = (so ? so.Icon : null);
	}

	public void SpawnAnimation()
	{
		spawnAnim.Play(base.transform);
		Show();
	}

	public void PutInBag(TileSlot slot)
	{
		base.transform.SetParent(slot.transform);
		base.transform.localScale = Vector3.one;
		InBag = true;
	}

	public void Hide()
	{
		if (Application.isPlaying)
		{
			if (debug)
			{
				Debug.Log(base.name + " - hide");
			}
			isHidden = true;
			base.gameObject.SetActive(false);
		}
	}

	public void Show()
	{
		if (Application.isPlaying)
		{
			if (debug)
			{
				Debug.Log(base.name + " - show");
			}
			isHidden = false;
			base.gameObject.SetActive(true);
		}
	}

	public void Unlock()
	{
		if (locked)
		{
			locked = false;
			lockAnim.Unlock();
			if (debug)
			{
				Debug.Log("Unlock: " + base.name, base.gameObject);
			}
		}
	}

	private void Lock()
	{
		if (!locked)
		{
			locked = true;
			lockTile.gameObject.SetActive(true);
			lockAnim.Lock();
			if (debug)
			{
				Debug.Log("Lock: " + base.name, base.gameObject);
			}
		}
	}
}
