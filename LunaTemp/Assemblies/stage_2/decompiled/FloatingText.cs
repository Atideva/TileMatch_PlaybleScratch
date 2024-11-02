using TMPro;
using UnityEngine;

public class FloatingText : MonoBehaviour
{
	[SerializeField]
	private TextMeshPro txt;

	[SerializeField]
	private float moveSpeed = 1f;

	[SerializeField]
	private float fadeSpeed = 1f;

	private Color _clr;

	private bool _isPlaying;

	public void Play(int number, string prefix, string suffix)
	{
		txt.text = prefix + number + suffix;
		_clr = txt.color;
		_clr.a = 1f;
		txt.color = _clr;
		_isPlaying = true;
	}

	private void Update()
	{
		if (_isPlaying)
		{
			base.transform.position += Vector3.up * (moveSpeed * Time.deltaTime);
			_clr.a -= fadeSpeed * Time.deltaTime;
			txt.color = _clr;
			if (!(_clr.a > 0f))
			{
				_isPlaying = false;
				base.gameObject.SetActive(false);
			}
		}
	}
}
