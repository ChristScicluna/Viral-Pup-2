#pragma strict
var easyskin : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI() {
	
	GUI.skin=easyskin;
	if(GUI.Button(Rect(200,100,400,190), " "))
	{
		Application.LoadLevel(1);
	}
}