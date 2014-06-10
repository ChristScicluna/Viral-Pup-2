#pragma strict
var mediumskin:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI() {

	GUI.skin = mediumskin;
	if(GUI.Button(Rect(200,225,400,190), " "))
	{
		Application.LoadLevel(2);
	}
}