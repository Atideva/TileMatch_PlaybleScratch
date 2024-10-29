using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

public class Tile : MonoBehaviour
{
    public SpriteRenderer icon;
    public SpriteRenderer disabledTile;
    public List<Tile> coverTiles = new();

    public Vector2 Position => transform.position;
    public TileData Data { get; private set; }
    public TileSlot Slot { get; private set; }
    public event Action<Tile> OnClick = delegate { };
    public int Layer { get; private set; }
    public   bool IsClickable { get; set; }

    public void SetContacts(List<Tile> cover)
    {
        if (cover == null) return;

        coverTiles.Clear();
        coverTiles = cover;
        if (cover.Count > 0)
        {
            Disable();
        }
    }

    public void SetSlot(TileSlot slot)
    {
        Slot = slot;
        // transform.position = slot.Position;
        transform.SetParent(Slot.transform);
        Invoke(nameof(ResetPosition), 0.1f);
        ResetPosition();
    }

    public void Enable()
    {
        IsClickable = true;
        disabledTile.gameObject.SetActive(false);
    }

    public void Disable()
    {
        IsClickable = false;
        disabledTile.gameObject.SetActive(true);
    }

    void ResetPosition()
    {
        transform.localPosition = Vector3.zero;
    }

    void OnMouseDown()
    {
        if (!IsClickable) return;
        OnClick(this);
    }

    public void Set(TileData data, int layer)
    {
        Data = data;
        Layer = layer;
        icon.sprite = data.icon;
        Enable();
    }
}