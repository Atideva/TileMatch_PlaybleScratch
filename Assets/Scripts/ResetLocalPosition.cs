using UnityEngine;

public class ResetLocalPosition : MonoBehaviour
{
    void Awake()
    {
        var rect = (RectTransform) transform;
        rect.anchoredPosition = Vector3.zero;

    }

}
