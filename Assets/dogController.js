#pragma strict

var anim:Animator;
var reachhigh:boolean;
var benchkick:boolean;
var crouch:boolean;
var kick:boolean;
var bark:boolean;
var barksound:AudioClip;


function Start () {
	reachhigh = false;
	benchkick = false;
	crouch = false;
	kick = false;
	bark = false;
	anim = GetComponent(Animator);
	yield action();
}


function OnTriggerEnter(other:Collider)
{
	
	
	if (other.gameObject.tag == "cat")
	{
	
		if (reachhigh){
	
	
		other.gameObject.GetComponent(catController).animate();
		views++;
		bonus++;
	
	
	//	Debug.Log(reachhigh);	
		}
	}
	
	if (other.gameObject.tag == "bench")
	{
		//bench passed the dog without me pressing button
		if (kick){
		//bench passed the dog with me pressing button
	//	Debug.Log(benchkick);
		other.gameObject.GetComponent(benchController).animate();
		views++;
		bonus++;
	
	
	//	Debug.Log(reachhigh);	
		}
	}
	
	if (other.gameObject.tag == "couple")
	{
		
		if (bark){
	//	Debug.Log(bark);
		other.gameObject.GetComponent(coupleController).animatebark();
		views++;
		bonus++;
			
	//	Debug.Log(reachhigh);	
		}
		
		if (kick){
	//	Debug.Log(kick);
		other.gameObject.GetComponent(coupleController).animatekick();
		views++;
		bonus++;
		
		
		}
	}
	
	if (other.gameObject.tag == "trafficlight")
	{
		/*
		1. Set the tag of the traffic Light
		2. Check the if statement of the dog's action (in this case done because
		it is reachhigh)
		3. Update the animator parameter in the object Script's animate function
		
		*/
	
		//cat passed the dog without me pressing button
		if (reachhigh){
		//cat passed the dog with me pressing button
	//	Debug.Log(reachhigh);
		other.gameObject.GetComponent(trafficlightController).animate();
		views++;
		bonus++;
	
	//	Debug.Log(reachhigh);	
		}
	}
	
	if (other.gameObject.tag == "hydrant")
	{
		if (bark){
	//	Debug.Log(bark);
		other.gameObject.GetComponent(hydrantController).animate();
		views++;
		bonus++;
		
	//	Debug.Log(reachhigh);	
		}
	
	}
	
	if (other.gameObject.tag == "photographer")
	{
		if (reachhigh){
		
		other.gameObject.GetComponent(photographerController).animate();
		views++;
		bonus++;
	
	
		}
	}
	
	if (other.gameObject.tag == "car")
	{
		if (GameObject.FindGameObjectWithTag("greenbar").transform.localScale.x>0)
		{
		 GameObject.FindGameObjectWithTag("greenbar").transform.localScale.x -= 0.1775;
		}
		//Debug.Log("car");
		anim.SetBool("crushed",true);
		yield WaitForSeconds(1.5);
		anim.SetBool("crushed",false);
		likes--;
		
		
	}

}


function resetCollider()
{
	gameObject.GetComponent(BoxCollider).enabled = true;
	//reset the collider to the original shape
	gameObject.GetComponent(BoxCollider).size.x = 4.71;
	gameObject.GetComponent(BoxCollider).size.y = 2.75;
		
	gameObject.GetComponent(BoxCollider).center.x = 2.15;
	gameObject.GetComponent(BoxCollider).center.y = 1.52;
}

function action()
{
	while(true)
	{
		if (reachhigh)
		{
			Debug.Log("Reach High"+reachhigh);
			this.gameObject.GetComponent(BoxCollider).size.x = 0.68;
			this.gameObject.GetComponent(BoxCollider).size.y = 15.67;
		
			this.gameObject.GetComponent(BoxCollider).center.x = 2.1;
			this.gameObject.GetComponent(BoxCollider).center.y = 1.64;
			
			bark=false;
			kick=false;
			crouch=false;
			yield WaitForSeconds(2.167);
	//		Debug.Log("end reach high");
			reachhigh = false;
			resetCollider();
			Debug.Log("Reach High"+reachhigh);
		}
		if (bark)
		{
		

		//	GetComponent(AudioSource).PlayClipAtPoint(barksound,transform.position);
			reachhigh = false;	
			kick=false;
			crouch=false;
			yield WaitForSeconds(1.333);
	//		Debug.Log("end bark");
			bark=false;
			
		
				
		}
						
						
		if (kick)
		{
			reachhigh = false;
			bark=false;
			crouch=false;
			yield WaitForSeconds(1.583);
	//		Debug.Log("end kick");
			kick=false;
		}
		if (crouch)
		{
			this.gameObject.GetComponent(BoxCollider).enabled = false;
			bark=false;
			kick=false;
			reachhigh = false;
			yield WaitForSeconds(2.25);
	//		Debug.Log("end crouch");
			resetCollider();
			crouch=false;
		}		
	yield;
	}
	
}




var views:int=0;

var likes:int=4;

var bonus:int=0;

function OnGUI()
{
	GameObject.FindGameObjectWithTag("views").GetComponent(GUIText).text = views+"";
}


function Update () {
	anim.SetBool("reachhigh",false);
	anim.SetBool("bark",false);
	anim.SetBool("kick",false);
	anim.SetBool("crouch",false);

	//Debug.Log("Reach: "+reachhigh);
	//Debug.Log("Bark: "+bark);
	//Debug.Log("Kick: "+kick);
	//Debug.Log("Crouch: "+crouch);
	
	if(bonus == 10)
	{
 	views = views + 5;
 	bonus = 0;
	}

	
	if(likes == 0)
	{
	Application.LoadLevel(0);
	}
				
	
	
	
	if (Input.GetKeyDown(KeyCode.UpArrow))
	{
		reachhigh = true;
		//change the shape of the dog collider to reach high
		
	
		anim.SetBool("reachhigh",true);
	}
	
	
	
	if (Input.GetKeyDown(KeyCode.LeftArrow))
	{
		
		bark=true;
		anim.SetBool("bark",true);
	}
	
		
	
	if (Input.GetKeyDown(KeyCode.DownArrow))
	{
		crouch=true;
		//shrink the collider
		
		anim.SetBool("crouch",true);
	}

	
	
	if (Input.GetKeyDown(KeyCode.RightArrow))
	{
		kick = true;
		anim.SetBool("kick",true);
	}


}



