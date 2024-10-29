using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InputTouch : GameComponent
{
    public List<Vector2> touches = new();
    public float touchSize=0.3f;
    public event Action<Vector2,float> OnTouchScreen = delegate { }; 
    protected override void OnInit()
    {
         
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            touches.Add(Input.mousePosition);
            OnTouchScreen(Input.mousePosition,touchSize);
        }
    }

    
}
