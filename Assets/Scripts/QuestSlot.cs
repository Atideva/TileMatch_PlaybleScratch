using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

[ExecuteAlways]
public class QuestSlot : MonoBehaviour
{
    [FormerlySerializedAs("goal")]
    [SerializeField] TileSO type;
    [SerializeField] int amount;
    [SerializeField] bool locked;
    [Space(20)]
    [SerializeField] Image icon;
    [SerializeField] TextMeshProUGUI amountTxt;
    public TileSO Type => type;
    public bool Locked => locked;
    public bool Complete => !locked;
    public Vector3 InitialScale = Vector3.one;
    public Vector3 MaximumScale = Vector3.one * 1.5f;
    public Vector3 EndScale = Vector3.one;
    public float animationDuration = 1f;
    public float maxSizeTrigger = 0.7f;

    float elapsedTime;
    bool isAnimating;
    bool isShrinking;

    void Start()
    {
        RefreshIcon();
    }

    public void Unlock()
    {
        locked = false;
        PlayAnimation();
        RefreshIcon();
    }

    void Update()
    {
        if (Application.isPlaying) return;
        RefreshIcon();
        
        if (isAnimating)
            Animate();
    }

    public void PlayAnimation()
    {
        elapsedTime = 0f;
        isAnimating = true;
        isShrinking = false;
        transform.localScale = InitialScale;
    }

    void Animate()
    {
        elapsedTime += Time.deltaTime;
        var maxSizeTime = animationDuration * maxSizeTrigger;
        switch (isShrinking)
        {
            case false when elapsedTime <= maxSizeTime:
            {
                transform.localScale = Vector3.Lerp(InitialScale, MaximumScale, elapsedTime / maxSizeTime);
                if (elapsedTime < maxSizeTime) return;
                isShrinking = true;
                elapsedTime = 0f;
                break;
            }
            case true when elapsedTime <= (animationDuration * (1 - maxSizeTrigger)):
            {
                transform.localScale = Vector3.Lerp(MaximumScale, EndScale, elapsedTime / (animationDuration * (1 - maxSizeTrigger)));
                if (elapsedTime >= animationDuration * (1 - maxSizeTrigger))
                    isAnimating = false;

                break;
            }
        }
    }

    void RefreshIcon()
    {
        icon.sprite = type.Icon;
        icon.color = locked ? Color.black : Color.white;
        amountTxt.text = type.name + " " + amount;
    }
}