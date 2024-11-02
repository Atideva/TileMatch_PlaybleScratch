using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class FloatingText : MonoBehaviour
{
    [SerializeField] TextMeshPro txt;
    [SerializeField]  float moveSpeed = 1f;  
    [SerializeField]  float fadeSpeed = 1f; 
    Color _clr;
    bool _isPlaying;
    
    public void Play(int number,string prefix,string suffix )
    {
        txt.text = prefix+number+suffix;
        _clr = txt.color;
        _clr.a = 1; 
        txt.color = _clr;
        _isPlaying = true; 
    }

    void Update()
    {
        if (_isPlaying)
        {
            transform.position += Vector3.up * (moveSpeed * Time.deltaTime);
            _clr.a -= fadeSpeed * Time.deltaTime;
            txt.color = _clr;

            if (_clr.a > 0) return;
            _isPlaying = false;
            gameObject.SetActive(false);
        }
    }


}
