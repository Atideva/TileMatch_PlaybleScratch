using System.Collections.Generic;
using UnityEngine;

public class Tutorial : MonoBehaviour
{
	public TutorialPointer pointer;

	public List<TutorialPointerData> pointers = new List<TutorialPointerData>();

	private int _current;

	public float delay;

	private void Awake()
	{
		pointer.Disable();
		Invoke("PlayNext", delay);
	}

	private void PlayNext()
	{
		if (_current >= pointers.Count)
		{
			pointer.Disable();
			return;
		}
		pointer.Enable();
		pointer.MoveTo(pointers[_current].tutorial.transform.position);
		pointers[_current].tile.OnMoveStart += CurrentComplete;
	}

	private void CurrentComplete()
	{
		pointers[_current].tutorial.SetActive(false);
		pointers[_current].tile.OnMoveStart -= CurrentComplete;
		_current++;
		PlayNext();
	}
}
