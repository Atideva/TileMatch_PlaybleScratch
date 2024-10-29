using Luna.Unity;

public class EndCard : GameComponent
{
	protected override void OnInit()
	{
	}

	public void Show()
	{
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}
}
