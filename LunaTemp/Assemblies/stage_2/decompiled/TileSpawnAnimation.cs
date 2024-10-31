using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TileSpawnAnimation : GameComponent
{
	public float delayBetweenLines = 0.1f;

	public float delayBetweenTiles = 0.05f;

	public float delayBetweenLayers = 0.1f;

	public void SpawnAnimation(List<List<Tile>> slots)
	{
		StartCoroutine(Play(slots));
	}

	private IEnumerator Play(List<List<Tile>> slots)
	{
		foreach (List<Tile> group in slots)
		{
			foreach (Tile slot in group)
			{
				slot.SpawnAnimation();
				yield return new WaitForSeconds(delayBetweenTiles);
			}
			yield return new WaitForSeconds(delayBetweenLines);
		}
	}

	protected override void OnInit()
	{
	}
}
