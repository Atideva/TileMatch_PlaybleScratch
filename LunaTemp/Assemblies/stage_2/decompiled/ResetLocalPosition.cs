using UnityEngine;

public class ResetLocalPosition : MonoBehaviour
{
	private void Awake()
	{
		RectTransform rect = (RectTransform)base.transform;
		rect.anchoredPosition = Vector3.zero;
	}
}
