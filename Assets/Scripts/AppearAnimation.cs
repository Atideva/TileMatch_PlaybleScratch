using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AppearAnimation : MonoBehaviour
{
    public Vector3 defaultSize = Vector3.one;
    public float spawnAnimSize = 1.5f;
    public float spawnAnimDuration = 0.3f;
    float _spawnTimer;
    bool _isSpawnAnimation;
    public void Play()
    {
        transform.localScale = Vector3.zero;
        _isSpawnAnimation = true;
    }
    void Update()
    {
        if (!_isSpawnAnimation) return;

        _spawnTimer += Time.deltaTime;
        var progress = _spawnTimer / spawnAnimDuration;

        switch (progress)
        {
            case <= 0.5f:
            {
                var scale = Mathf.Lerp(0, spawnAnimSize, progress * 2);
                transform.localScale = defaultSize * scale;
                break;
            }
            case <= 1.0f:
            {
                var scale = Mathf.Lerp(spawnAnimSize, 1, (progress - 0.5f) * 2);
                transform.localScale = defaultSize * scale;
                break;
            }
            default:
                transform.localScale = defaultSize;
                _isSpawnAnimation = false;
                break;
        }
    }
}
