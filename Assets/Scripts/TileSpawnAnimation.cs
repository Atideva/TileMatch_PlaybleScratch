using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Unity.VisualScripting;
using UnityEngine;

public class TileSpawnAnimation : GameComponent
{
    public void SpawnAnimation(List<TileSlot> slots, List<TileSlot> slots2)
    {
        StartCoroutine(Play(slots,slots2));
    }

    public float delayBetweenLines = 0.1f;
    public float delayBetweenTiles = 0.05f;

    IEnumerator Play(List<TileSlot> slots, List<TileSlot> slots2)
    {
        var groupedTiles = slots.GroupBy(tile => tile.Layer)
            .Select(group => group.ToList())
            .ToList();

        foreach (var group in groupedTiles)
        {
            foreach (var slot in group)
            {
                slot.SpawnAnimation();
                yield return new WaitForSeconds(delayBetweenTiles);
            }

            //Debug.Log("New group with Y value: " + group[0].Layer + " and count: " + group.Count);
            yield return new WaitForSeconds(delayBetweenLines);
        }

        yield return new WaitForSeconds(delayBetweenLayers);
        
        var groupedTiles2 = slots2.GroupBy(tile => tile.Layer)
            .Select(group => group.ToList())
            .ToList();

        foreach (var group in groupedTiles2)
        {
            foreach (var slot in group)
            {
                slot.SpawnAnimation();
                yield return new WaitForSeconds(delayBetweenTiles);
            }

            //Debug.Log("New group with Y value: " + group[0].Layer + " and count: " + group.Count);
            yield return new WaitForSeconds(delayBetweenLines);
        }
    }

    public float delayBetweenLayers = 0.1f;
    protected override void OnInit()
    {
    }
}