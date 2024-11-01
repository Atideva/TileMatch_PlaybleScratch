using System;
using UnityEngine;

public class ScaleAnimation : MonoBehaviour
{
    [SerializeField] bool playFromStart;
    [SerializeField] Vector3 startScale = Vector3.one;
    [SerializeField] Vector3 endScale = Vector3.one * 1.5f;
    [SerializeField] float speed = 2.0f;
    bool _increase = true;
    bool _isScaling;

    void Start()
    {
        if (playFromStart) Play();
    }

    void Update()
    {
        if (!_isScaling) return;
        
        var scale = _increase ? endScale : startScale;
        transform.localScale = Vector3.Lerp(transform.localScale, scale, speed * Time.deltaTime);
        if (Vector3.Distance(transform.localScale, scale) < 0.01f)
            _increase = !_increase;
    }

    public void Play()
    {
        _isScaling = true;
    }

    public void Stop()
    {
        _isScaling = false;
    }
}