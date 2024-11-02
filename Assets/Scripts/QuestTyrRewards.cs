using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;

public class QuestTyrRewards : GameComponent
{
    [SerializeField] int cashForMatch3 = 100;
    [SerializeField] TextMeshProUGUI balanceTxt;
    [SerializeField] FloatingText floatingText;
    [SerializeField] AnimationScale scaleAnim;

    [Space(20)]
    [SerializeField] int balance;
    [SerializeField] FloatingText lastText;
    protected override void OnInit()
    {
        RefreshText();
        Game.TileMatcher.OnMatch3 += OnMatch3;
    }

    void OnMatch3(List<TileSlot> slots, TileSO arg2)
    {
        balance += cashForMatch3;
        RefreshText();
        lastText = Instantiate(floatingText, slots[1].Position, Quaternion.identity);
        lastText.Play(cashForMatch3, "+", "$");
    }

    void RefreshText()
    {
        balanceTxt.text = "$" + balance;
        scaleAnim.Play(balanceTxt.transform);
    }
}