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
        Luna.Unity.Analytics.LogEvent("Show end card", 0);
        canvas.gameObject.SetActive(true);
    }

    void Hide() 
        => canvas.gameObject.SetActive(false);
}