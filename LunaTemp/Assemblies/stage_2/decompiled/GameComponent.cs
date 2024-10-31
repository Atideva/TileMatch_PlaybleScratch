using UnityEngine;

public abstract class GameComponent : MonoBehaviour
{
	[HideInInspector]
	public Game Game;

	public void Init(Game game)
	{
		Game = game;
		OnInit();
	}

	protected abstract void OnInit();
}
