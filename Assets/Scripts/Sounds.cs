using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Sounds : GameComponent
{
    [Space(10)]
    [SerializeField] AudioClip tileClick;
    [SerializeField] AudioClip tileMerge;
    [SerializeField] AudioClip levelWin;
    [SerializeField] AudioClip leveLose;
    [Space(50)]
    [SerializeField] AudioSource source;
    protected override void OnInit()
    {
        Game.Actions.OnMoveStart += _ => { Play(Sound.Click); };
        Game.TileMatcher.OnMatch += (_, _) => { Play(Sound.Merge); };
        Game.OnQuestWin += ( ) => { Play(Sound.LevelWin); };
        Game.OnLose += ( ) => { Play(Sound.LevelLose); };
    }

    public void Play(Sound type)
    {
        switch (type)
        {
            case Sound.Click:
                source.PlayOneShot(tileClick);
                break;
            case Sound.Merge:
                source.PlayOneShot(tileMerge);
                break;
            case Sound.LevelWin:
                source.PlayOneShot(levelWin);
                break;
            case Sound.LevelLose:
                source.PlayOneShot(leveLose);
                break;
            default:
                throw new ArgumentOutOfRangeException(nameof(type), type, null);
        }
    }
}

public enum Sound
{
    Click,
    Merge,
    LevelWin,
    LevelLose
}

