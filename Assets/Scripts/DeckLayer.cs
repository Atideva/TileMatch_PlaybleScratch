using System.Linq;
using UnityEngine;
using UnityEngine.Serialization;

public class DeckLayer : MonoBehaviour
{
    public int layer;
    Deck _deck;
    public Tile[] Tiles;

    public void Init(Deck deck, int layerID)
    {
        var pos = transform.position;
        transform.position = new Vector3(pos.x, pos.y, layerID);
        _deck = deck;

        FindTiles();
        InitTiles(deck.Game, layerID);
    }

    void InitTiles(Game game, int layerID)
    {
        layer = layerID;

        var groupedByYPosition = Tiles
            .GroupBy(tile => tile.Y)
            .Select(group => group.ToList())
            .ToList();

        for (var i = 0; i < groupedByYPosition.Count; i++)
        {
            var lineId = i * 10;
            var group = groupedByYPosition[i];
            foreach (var tile in group)
            {
                tile.SetLayer(layer, lineId);
                tile.SetGame(game);
                tile.Unlock();
                tile.Hide();
            }
        }
    }

    void FindTiles()
        => Tiles = GetComponentsInChildren<Tile>();
}