#pragma strict
var speed:float=5;
var anim:Animator;


function Start () {
		anim = GetComponent(Animator);
}

function animate()
{
	Debug.Log("hydrant bark");		
	anim.SetBool("hydrantbark",true);
}


function Update () {
	transform.Translate(Vector3.left * speed * Time.deltaTime);


}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}