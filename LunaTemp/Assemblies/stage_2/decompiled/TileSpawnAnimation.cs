using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileSpawnAnimation : GameComponent
{
	public float delayBetweenLines = 0.1f;

	public float delayBetweenTiles = 0.05f;

	public float delayBetweenLayers = 0.1f;

	public void SpawnAnimation(List<Tile> slots, List<Tile> slots2)
	{
		StartCoroutine(Play(slots, slots2));
	}

	private IEnumerator Play(List<Tile> slots, List<Tile> slots2)
	{
		List<List<Tile>> groupedTiles = (from tile in slots
			group tile by tile.Layer into @group
			select @group.ToList()).ToList();
		foreach (List<Tile> group2 in groupedTiles)
		{
			foreach (Tile slot2 in group2)
			{
				slot2.SpawnAnimation();
				yield return new WaitForSeconds(delayBetweenTiles);
			}
			yield return new WaitForSeconds(delayBetweenLines);
		}
		yield return new WaitForSeconds(delayBetweenLayers);
		List<List<Tile>> groupedTiles2 = (from tile in slots2
			group tile by tile.Layer into @group
			select @group.ToList()).ToList();
		foreach (List<Tile> group3 in groupedTiles2)
		{
			foreach (Tile slot in group3)
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
