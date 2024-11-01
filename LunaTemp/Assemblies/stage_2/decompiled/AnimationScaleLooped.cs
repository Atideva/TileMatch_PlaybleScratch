using UnityEngine;

public class AnimationScaleLooped : MonoBehaviour
{
	[SerializeField]
	private bool playFromStart;

	[SerializeField]
	private Vector3 startScale = Vector3.one;

	[SerializeField]
	private Vector3 endScale = Vector3.one * 1.5f;

	[SerializeField]
	private float speed = 2f;

	private bool _increase = true;

	private bool _isScaling;

	private void Start()
	{
		if (playFromStart)
		{
			Play();
		}
	}

	private void Update()
	{
		if (_isScaling)
		{
			Vector3 scale = (_increase ? endScale : startScale);
			base.transform.localScale = Vector3.Lerp(base.transform.localScale, scale, speed * Time.deltaTime);
			if (Vector3.Distance(base.transform.localScale, scale) < 0.01f)
			{
				_increase = !_increase;
			}
		}
	}

	public void Play()
	{
		_isScaling = true;
	}

	public void Stop()
	{
		_isScaling = false;
	}
}
