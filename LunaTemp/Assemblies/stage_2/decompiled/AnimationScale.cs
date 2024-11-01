using UnityEngine;

public class AnimationScale : MonoBehaviour
{
	[SerializeField]
	private float startSize = 0f;

	[SerializeField]
	private float maxSize = 1.5f;

	[SerializeField]
	private float endSize = 1f;

	[SerializeField]
	private float duration = 0.3f;

	private float _timer;

	private bool _isSpawnAnimation;

	private Transform _target;

	public void Play(Transform target)
	{
		_target = target;
		_target.localScale = new Vector3(startSize, startSize, startSize);
		_isSpawnAnimation = true;
	}

	private void Update()
	{
		if (!_isSpawnAnimation)
		{
			return;
		}
		_timer += Time.deltaTime;
		float progress = _timer / duration;
		float num = progress;
		float num2 = num;
		if (num2 < 1f)
		{
			if (num2 < 0.5f)
			{
				float scale = Mathf.Lerp(0f, maxSize, progress * 2f);
				_target.localScale = new Vector3(endSize, endSize, endSize) * scale;
			}
			else
			{
				float scale2 = Mathf.Lerp(maxSize, 1f, (progress - 0.5f) * 2f);
				_target.localScale = new Vector3(endSize, endSize, endSize) * scale2;
			}
		}
		else if (num2 >= 1f)
		{
			_target.localScale = new Vector3(endSize, endSize, endSize);
			_isSpawnAnimation = false;
		}
	}
}
