using UnityEngine;

public class ResetLocalPosition : MonoBehaviour
{
	private void Awake()
	{
		base.transform.position = Vector3.zero;
	}
}
