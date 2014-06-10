#pragma strict
var speed:float=5;
var anim:Animator;


function Start () {
		anim = GetComponent(Animator);
}

function animate()
{	
	Debug.Log("tflight animate");	
	anim.SetBool("trafficlightreachhigh",true);
}


function Update () {
	transform.Translate(Vector3.left * speed * Time.deltaTime);


}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}