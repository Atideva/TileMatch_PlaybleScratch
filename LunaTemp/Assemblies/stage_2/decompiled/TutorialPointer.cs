using UnityEngine;

public class TutorialPointer : MonoBehaviour
{
	private Vector2 Destination;

	private bool _isMoving;

	public float speed = 10f;

	private bool HasArrive => Vector2.Distance(Position, Destination) < 0.01f;

	private Vector2 Position => base.transform.position;

	public void Enable()
	{
		base.gameObject.SetActive(true);
	}

	public void Disable()
	{
		base.gameObject.SetActive(false);
	}

	public void MoveTo(Vector2 pos)
	{
		Destination = pos;
		_isMoving = true;
	}

	private void StopMove()
	{
		base.transform.position = Destination;
		_isMoving = false;
	}

	private void Update()
	{
		if (_isMoving)
		{
			base.transform.position = Vector3.MoveTowards(Position, Destination, speed * Time.deltaTime);
			if (HasArrive)
			{
				StopMove();
			}
		}
	}
}
