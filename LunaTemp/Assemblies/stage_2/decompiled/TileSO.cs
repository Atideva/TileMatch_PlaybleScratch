using UnityEngine;

[CreateAssetMenu(fileName = "Tile", menuName = "SO/Tile")]
public class TileSO : ScriptableObject
{
	[SerializeField]
	private Sprite icon;

	public Sprite Icon => icon;
}
