using UnityEngine;

public class AnimationScale : MonoBehaviour
{
    [SerializeField] float startSize = 0;
    [SerializeField] float maxSize = 1.5f;
    [SerializeField] float endSize = 1;
    [SerializeField] float duration = 0.3f;

    float _timer;
    bool _isPlaying;
    Transform _target;
  
    public void Play(Transform target)
    {
        _target = target;
        _target.localScale = new Vector3(startSize, startSize, startSize);
        _isPlaying = true;
        _timer = 0;
    }

    void Update()
    {
        if (!_isPlaying) return;

        _timer += Time.deltaTime;
        var progress = _timer / duration;

        switch (progress)
        {
            case < 0.5f:
            {
                var scale = Mathf.Lerp(0, maxSize, progress * 2);
                _target.localScale = new Vector3(endSize, endSize, endSize) * scale;
                break;
            }
            case < 1.0f:
            {
                var scale = Mathf.Lerp(maxSize, 1, (progress - 0.5f) * 2);
                _target.localScale = new Vector3(endSize, endSize, endSize) * scale;
                break;
            }
            case >= 1.0f:
            {
                _target.localScale = new Vector3(endSize, endSize, endSize);
                _isPlaying = false;
                break;
            }
        }
    }
}