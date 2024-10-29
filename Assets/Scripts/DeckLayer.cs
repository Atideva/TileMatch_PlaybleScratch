using System.Linq;
using UnityEngine;

public class DeckLayer : MonoBehaviour
{
    public int Layer { get; private set; }
    Deck _deck;
    public Tile[] Tiles;

    public void Init(Deck deck,int layer)
    {
        var pos = transform.position;
        transform.position = new Vector3(pos.x, pos.y, layer);
        _deck = deck;
        
        //FindTiles();
        InitTiles(layer);
    }

    void InitTiles(int layer)
    {
        Layer = layer;
        
      var  groupedByYPosition = Tiles
            .GroupBy(tile => tile.Y)  
            //.OrderByDescending(group => group.Key)  
            .Select(group => group.ToList())  
            .ToList();
      
      for (var i = 0; i < groupedByYPosition.Count; i++)
      {
          var lineId = i * 10;
          var group = groupedByYPosition[i];
          foreach (var tile in group)
          {
              tile.SetLayer(Layer, lineId);
              tile.Hide();
          }
      }

    }

    /*void FindTiles() 
        => Tiles = GetComponentsInChildren<Tile>();*/
}