using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Sweeling : MonoBehaviour
{
    public Transform center;
    public float radius = 5f;
    public float speed = 2f;

    public float angle;

    void Update()
    {
        angle += speed * Time.deltaTime;
        var x = center.position.x + Mathf.Cos(angle) * radius;
        var y = center.position.y + Mathf.Sin(angle) * radius;
        transform.position = new Vector3(x, y, 0);
    }
}