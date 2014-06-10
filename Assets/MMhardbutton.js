#pragma strict
var hardskin:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI() {

	GUI.skin = hardskin;
	if(GUI.Button(Rect(200,350,400,190), " "))
	{
		Application.LoadLevel(3);
	}
}