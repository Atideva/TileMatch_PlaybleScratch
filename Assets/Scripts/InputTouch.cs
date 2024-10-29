using System;
using System.Collections.Generic;
using UnityEngine;

public class InputTouch : GameComponent
{
    public float inputCooldown = 0.1f;
    public List<Vector2> touches = new();
    public float touchSize=0.3f;
    public event Action<Vector2,float> OnTouchScreen = delegate { }; 
    protected override void OnInit()
    {
         
    }

    float _cooldown;
    void Update()
    {
        if (_cooldown > 0)
        {
            _cooldown -= Time.deltaTime;
            return;
        }
        
        if (Input.GetMouseButtonDown(0))
        {
            _cooldown = inputCooldown;
            touches.Add(Input.mousePosition);
            OnTouchScreen(Input.mousePosition,touchSize);
        }
    }

    
}
