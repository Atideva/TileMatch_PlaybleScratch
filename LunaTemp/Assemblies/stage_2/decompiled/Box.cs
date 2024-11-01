using System;
using UnityEngine;

[Serializable]
public class Box
{
	public Vector2 Position;

	public float Width;

	public float Height;

	public Box(Vector2 position, float width, float height)
	{
		Position = position;
		Width = width;
		Height = height;
	}
}
