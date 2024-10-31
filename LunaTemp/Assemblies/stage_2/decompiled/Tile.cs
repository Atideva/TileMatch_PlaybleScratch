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
	public Vector3 defaultSize = Vector3.one;

	public float speed;

	public float spawnAnimSize = 1.5f;

	public float spawnAnimDuration = 0.3f;

	[FormerlySerializedAs("isClickable")]
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

	private bool _isSpawnAnimation;

	private float _spawnTimer;

	private Vector3 _targetPosition;

	private float _timer;

	private bool _isMoving;

	private TileSlot _targetSlot;

	public float lockAlpha = 0.3f;

	public float fadeDuration = 1f;

	private float _fadeTimer;

	private bool _isFading;

	private float _fadeFrom;

	private float _fadeTo;

	private float fadeSpeed = 1f;

	private float currentAlpha;

	public bool debug;

	private Game _game;

	public TileSO Type => type;

	public bool IsClickable => !locked && !_isMoving && !InBag;

	public bool InBag { get; private set; }

	public Vector2 Position => base.transform.position;

	public bool IsMoving => _isMoving;

	public float Y => base.transform.position.y;

	public float X => base.transform.position.x;

	private bool Arrive => Vector2.Distance(base.transform.position, _targetPosition) < 0.01f;

	public event Action<Tile, TileSlot> OnMoveFinish = delegate
	{
	};

	private void OnTriggerEnter2D(Collider2D other)
	{
		if (!_isMoving)
		{
			Debug.LogWarning("Contact: " + base.gameObject.name, base.gameObject);
			Tile collideTile = _game.Find(other.transform);
			if ((bool)collideTile && !collideTile._isMoving && collideTile.layer > layer && !coverTiles.Contains(collideTile))
			{
				coverTiles.Add(collideTile);
				RefreshLock();
			}
		}
	}

	private void OnTriggerStay2D(Collider2D other)
	{
		OnTriggerEnter2D(other);
	}

	private void OnTriggerExit2D(Collider2D other)
	{
		Tile tile = _game.Find(other.transform);
		if ((bool)tile && coverTiles.Contains(tile))
		{
			coverTiles.Remove(tile);
			RefreshLock();
		}
	}

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

	private void RefreshEditor()
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
		trail.sortingOrder = 10000;
		background.sortingOrder = 10001;
		icon.sortingOrder = 10002;
		_targetSlot = slot;
		_targetPosition = slot.Position;
		_isMoving = true;
	}

	public void SetGame(Game game)
	{
		_game = game;
	}

	public void SetLayer(int l, int lineID)
	{
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
		if (_isFading)
		{
			currentAlpha += fadeSpeed * Time.deltaTime;
			SetAlpha(currentAlpha);
			if (currentAlpha <= 0f)
			{
				_isFading = false;
			}
			if (currentAlpha >= lockAlpha)
			{
				_isFading = false;
			}
		}
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

	private void SetAlpha(float alpha)
	{
		Debug.Log(alpha);
		Color color = lockTile.color;
		color.a = alpha;
		lockTile.color = color;
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
			Debug.LogWarning("Unlock: " + base.name, base.gameObject);
			locked = false;
			HideLockedImage();
		}
	}

	public void Lock()
	{
		if (!locked)
		{
			Debug.LogWarning("Lock: " + base.name, base.gameObject);
			locked = true;
			lockTile.gameObject.SetActive(true);
			ShowLockedImage();
		}
	}

	private void HideLockedImage()
	{
		currentAlpha = lockAlpha;
		fadeSpeed = (0f - lockAlpha) / fadeDuration;
		_isFading = true;
	}

	private void ShowLockedImage()
	{
		currentAlpha = 0f;
		fadeSpeed = lockAlpha / fadeDuration;
		_isFading = true;
	}
}
