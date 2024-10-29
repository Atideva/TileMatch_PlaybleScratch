using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LoseCondition : GameComponent
{
    public event Action OnLose = delegate { };

    protected override void OnInit()
    {
        Game.Bag.OnPut += OnBagChange;
    }

    void OnBagChange()
    {
        _checkDelay += 1;
    }

    float _checkDelay;

    void Update()
    {
        if (_checkDelay <= 0) return;
        
        _checkDelay -= Time.deltaTime;
        if (_checkDelay <= 0) Check();
    }

    void Check()
    {
        if (Game.Bag.HaveEmptySlot) return;
        Lose();
    }

    void Lose()
    {
        OnLose();
    }
}