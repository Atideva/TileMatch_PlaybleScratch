using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TileLockAnimation : MonoBehaviour
{
    [Space(20)]
    public float lockAlpha = 0.3f;
    public float fadeDuration = 1f;
    bool _isFading;
    float currentAlpha;
    float fadeSpeed;
    Tile _tile;

    public void SetTile(Tile tile)
    {
        _tile = tile;
    }

    void SetAlpha(float alpha)
    {
        var color = _tile.lockTile.color;
        color.a = alpha;
        _tile.lockTile.color = color;
    }

    void Update()
    {
        if (!_isFading) return;

        currentAlpha += fadeSpeed * Time.deltaTime;
        SetAlpha(currentAlpha);

        if (currentAlpha <= 0) _isFading = false;
        if (currentAlpha >= lockAlpha) _isFading = false;
    }

   public void Unlock()
    {
        currentAlpha = lockAlpha;
        fadeSpeed = -lockAlpha / fadeDuration;
        _isFading = true;
    }

    public void Lock()
    {
        currentAlpha = 0;
        fadeSpeed = lockAlpha / fadeDuration;
        _isFading = true;
    }
}