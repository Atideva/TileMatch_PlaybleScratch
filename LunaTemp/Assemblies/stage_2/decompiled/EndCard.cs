using Luna.Unity;
using UnityEngine;

public class EndCard : GameComponent
{
	public Canvas canvas;

	public SlideAnimationUI slideAnimation;

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
		slideAnimation.Play();
	}

	private void Hide()
	{
		canvas.gameObject.SetActive(false);
	}
}
