using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TileSpawnAnimation : GameComponent
{
    public void SpawnAnimation(List<List<Tile>> slots )
    {
        StartCoroutine(Play(slots));
    }

    public float delayBetweenLines = 0.1f;
    public float delayBetweenTiles = 0.05f;

    IEnumerator Play(List<List<Tile>> slots)
    {
 
        foreach (var group in slots)
        {
            foreach (var slot in group)
            {
                slot.SpawnAnimation();
                yield return new WaitForSeconds(delayBetweenTiles);
            }
            yield return new WaitForSeconds(delayBetweenLines);
        }
 
 
    }

    public float delayBetweenLayers = 0.1f;
    protected override void OnInit()
    {
    }
}