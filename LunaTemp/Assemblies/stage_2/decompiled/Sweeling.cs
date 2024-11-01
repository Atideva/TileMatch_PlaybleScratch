using UnityEngine;

public class Sweeling : MonoBehaviour
{
	public Transform center;

	public float radius = 5f;

	public float speed = 2f;

	public float angle;

	private void Update()
	{
		angle += speed * Time.deltaTime;
		float x = center.position.x + Mathf.Cos(angle) * radius;
		float y = center.position.y + Mathf.Sin(angle) * radius;
		base.transform.position = new Vector3(x, y, 0f);
	}
}
