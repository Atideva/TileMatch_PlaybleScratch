using UnityEngine;
[CreateAssetMenu(fileName = "Tile", menuName = "SO/Tile")]
public class TileSO : ScriptableObject
{
    [SerializeField] Sprite icon;
    public Sprite Icon => icon;
}
