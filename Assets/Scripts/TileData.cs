using UnityEngine;
using UnityEngine.Serialization;

[System.Serializable]
public class TileData
{
    [FormerlySerializedAs("id")] public int type;
    public Sprite icon;
    public int amount;
    public bool CanSpawn => amount > 0;
    public void Decrease() => amount--;
}