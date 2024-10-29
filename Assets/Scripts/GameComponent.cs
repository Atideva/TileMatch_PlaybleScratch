using UnityEngine;

public abstract class GameComponent : MonoBehaviour
{
    protected  Game Game;

    public void Init(Game game)
    {
        Game = game;
        OnInit();
    }

    protected abstract void OnInit();

}