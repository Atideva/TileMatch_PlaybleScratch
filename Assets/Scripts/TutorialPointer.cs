using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TutorialPointer : MonoBehaviour
{
    Vector2 Destination;

    public void Enable()
    {
        gameObject.SetActive(true);
    }

    public void Disable()
    {
        gameObject.SetActive(false);
    }

    public void MoveTo(Vector2 pos)
    {
        Destination = pos;
        _isMoving = true;
    }

    bool HasArrive => Vector2.Distance(Position, Destination) < 0.01f;
    Vector2 Position => transform.position;
    bool _isMoving;
    public float speed = 10;

    void StopMove()
    {
        transform.position = Destination;
        _isMoving = false;
    }

    void Update()
    {
        if (!_isMoving) return;

        transform.position = Vector3.MoveTowards(Position, Destination, speed * Time.deltaTime);
        if (HasArrive)
            StopMove();
    }

}