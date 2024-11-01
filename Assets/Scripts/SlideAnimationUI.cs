using UnityEngine;

public class SlideAnimationUI : MonoBehaviour
{
    public RectTransform rectTransform;
    public Vector2 targetPosition = Vector2.zero;
    public float slideSpeed = 500f;
    bool _isSliding;

    void Start()
    {
        rectTransform.anchoredPosition = new Vector2(Screen.width, rectTransform.anchoredPosition.y);
    }

    void Update()
    {
        if (!_isSliding) return;

        rectTransform.anchoredPosition = Vector2.MoveTowards(rectTransform.anchoredPosition,
            targetPosition,
            slideSpeed * Time.deltaTime);

        if (rectTransform.anchoredPosition == targetPosition)
            _isSliding = false;
    }

    public void Play()
    {
        rectTransform.anchoredPosition = new Vector2(Screen.width, rectTransform.anchoredPosition.y);
        _isSliding = true; // Start the sliding animation
    }
}