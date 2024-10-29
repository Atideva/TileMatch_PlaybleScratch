using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileSpawnAnimation : GameComponent
{
	public float delayBetweenLines = 0.1f;

	public float delayBetweenTiles = 0.05f;

	public float delayBetweenLayers = 0.1f;

	public void SpawnAnimation(List<TileSlot> slots, List<TileSlot> slots2)
	{
		StartCoroutine(Play(slots, slots2));
	}

	private IEnumerator Play(List<TileSlot> slots, List<TileSlot> slots2)
	{
		List<List<TileSlot>> groupedTiles = (from tile in slots
			group tile by tile.Layer into @group
			select @group.ToList()).ToList();
		foreach (List<TileSlot> group3 in groupedTiles)
		{
			foreach (TileSlot slot2 in group3)
			{
				slot2.SpawnAnimation();
				yield return new WaitForSeconds(delayBetweenTiles);
			}
			Debug.Log("New group with Y value: " + group3[0].Layer + " and count: " + group3.Count);
			yield return new WaitForSeconds(delayBetweenLines);
		}
		yield return new WaitForSeconds(delayBetweenLayers);
		List<List<TileSlot>> groupedTiles2 = (from tile in slots2
			group tile by tile.Layer into @group
			select @group.ToList()).ToList();
		foreach (List<TileSlot> group2 in groupedTiles2)
		{
			foreach (TileSlot slot in group2)
			{
				slot.SpawnAnimation();
				yield return new WaitForSeconds(delayBetweenTiles);
			}
			Debug.Log("New group with Y value: " + group2[0].Layer + " and count: " + group2.Count);
			yield return new WaitForSeconds(delayBetweenLines);
		}
	}

	protected override void OnInit()
	{
	}
}
