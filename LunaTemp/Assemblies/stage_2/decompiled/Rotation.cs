using UnityEngine;

public class Rotation : MonoBehaviour
{
	public Vector3 rotationSpeed = new Vector3(0f, 100f, 0f);

	private void Update()
	{
		base.transform.Rotate(rotationSpeed * Time.deltaTime);
	}
}
