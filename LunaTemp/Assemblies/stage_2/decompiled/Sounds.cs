using System;
using UnityEngine;

public class Sounds : GameComponent
{
	[Space(10f)]
	[SerializeField]
	private AudioClip tileClick;

	[SerializeField]
	private AudioClip tileMerge;

	[SerializeField]
	private AudioClip levelWin;

	[SerializeField]
	private AudioClip leveLose;

	[Space(50f)]
	[SerializeField]
	private AudioSource source;

	protected override void OnInit()
	{
		Game.Actions.OnMoveStart += delegate
		{
			Play(Sound.Click);
		};
		Game.TileMatcher.OnMatch += delegate
		{
			Play(Sound.Merge);
		};
		Game.OnQuestWin += delegate
		{
			Play(Sound.LevelWin);
		};
		Game.OnLose += delegate
		{
			Play(Sound.LevelLose);
		};
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
			throw new ArgumentOutOfRangeException("type", type, null);
		}
	}
}
