using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

[ExecuteAlways]
public class QuestSlot : MonoBehaviour
{
	[FormerlySerializedAs("goal")]
	[SerializeField]
	private TileSO type;

	[SerializeField]
	private int amount;

	[SerializeField]
	private bool locked;

	[Space(20f)]
	[SerializeField]
	private Image icon;

	[SerializeField]
	private TextMeshProUGUI amountTxt;

	public Vector3 InitialScale = Vector3.one;

	public Vector3 MaximumScale = Vector3.one * 1.5f;

	public Vector3 EndScale = Vector3.one;

	public float animationDuration = 1f;

	public float maxSizeTrigger = 0.7f;

	private float elapsedTime;

	private bool isAnimating;

	private bool isShrinking;

	public TileSO Type => type;

	public bool Locked => locked;

	public bool Complete => !locked;

	private void Start()
	{
		RefreshIcon();
	}

	public void Unlock()
	{
		locked = false;
		PlayAnimation();
		RefreshIcon();
	}

	private void Update()
	{
		if (!Application.isPlaying)
		{
			RefreshIcon();
			if (isAnimating)
			{
				Animate();
			}
		}
	}

	public void PlayAnimation()
	{
		elapsedTime = 0f;
		isAnimating = true;
		isShrinking = false;
		base.transform.localScale = InitialScale;
	}

	private void Animate()
	{
		elapsedTime += Time.deltaTime;
		float maxSizeTime = animationDuration * maxSizeTrigger;
		if (!isShrinking)
		{
			if (elapsedTime <= maxSizeTime)
			{
				base.transform.localScale = Vector3.Lerp(InitialScale, MaximumScale, elapsedTime / maxSizeTime);
				if (!(elapsedTime < maxSizeTime))
				{
					isShrinking = true;
					elapsedTime = 0f;
				}
			}
		}
		else if (elapsedTime <= animationDuration * (1f - maxSizeTrigger))
		{
			base.transform.localScale = Vector3.Lerp(MaximumScale, EndScale, elapsedTime / (animationDuration * (1f - maxSizeTrigger)));
			if (elapsedTime >= animationDuration * (1f - maxSizeTrigger))
			{
				isAnimating = false;
			}
		}
	}

	private void RefreshIcon()
	{
		icon.sprite = type.Icon;
		icon.color = (locked ? Color.black : Color.white);
		amountTxt.text = type.name + " " + amount;
	}
}
