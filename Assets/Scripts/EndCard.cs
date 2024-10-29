using UnityEngine;

public class EndCard : GameComponent
{
    public Canvas canvas;

    protected override void OnInit()
    {
        if (!Application.isPlaying) return;
        Hide();
    }

    public void Show()
    {
        canvas.gameObject.SetActive(true);

    }

    public void Hide() => canvas.gameObject.SetActive(false);
}