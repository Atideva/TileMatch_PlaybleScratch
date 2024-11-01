using UnityEngine;

public class TileLockAnimation : MonoBehaviour
{
	[Space(20f)]
	public float lockAlpha = 0.3f;

	public float fadeDuration = 1f;

	private bool _isFading;

	private float currentAlpha;

	private float fadeSpeed;

	private Tile _tile;

	public void SetTile(Tile tile)
	{
		_tile = tile;
	}

	private void SetAlpha(float alpha)
	{
		Color color = _tile.lockTile.color;
		color.a = alpha;
		_tile.lockTile.color = color;
	}

	private void Update()
	{
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
	}

	public void Unlock()
	{
		currentAlpha = lockAlpha;
		fadeSpeed = (0f - lockAlpha) / fadeDuration;
		_isFading = true;
	}

	public void Lock()
	{
		currentAlpha = 0f;
		fadeSpeed = lockAlpha / fadeDuration;
		_isFading = true;
	}
}
