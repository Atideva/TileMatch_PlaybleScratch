using Luna.Unity;
using UnityEngine;

public class EndCard : GameComponent
{
	public Canvas canvas;

	protected override void OnInit()
	{
		if (Application.isPlaying)
		{
			Hide();
		}
	}

	public void Show()
	{
		Analytics.LogEvent("Show end card", 0);
		canvas.gameObject.SetActive(true);
	}

	private void Hide()
	{
		canvas.gameObject.SetActive(false);
	}
}
