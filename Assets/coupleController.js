#pragma strict
var speed:float=5;
var anim:Animator;

function Start () {
		anim = GetComponent(Animator);		
}

function animatebark()
{	
	Debug.Log("couple bark");
	anim.SetBool("couplebark",true);
}

function animatekick()
{
	Debug.Log("couple kick");
	anim.SetBool("couplekick",true);
}


function Update () {
	
	transform.Translate(Vector3.left * speed * Time.deltaTime);
	
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}