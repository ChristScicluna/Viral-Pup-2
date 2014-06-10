#pragma strict

//all prefabs here
var catPrefab:Rigidbody;
var benchPrefab:Rigidbody;
var couple:Rigidbody;
var Hydrant:Rigidbody;
var Photographer:Rigidbody;
var TrafficLightPrefab:Rigidbody;
var car:Rigidbody;


var numberOfObjects:int;

function Start () {
	Application.targetFrameRate = 12;
	InvokeRepeating("generateObjects",1.5,2.5);
}


function generateObjects()
{
	var objectToGenerate:int;
	objectToGenerate = Random.Range(1,numberOfObjects+1);
	
//	Debug.Log(objectToGenerate);
	
	if (objectToGenerate ==1)
	{
		//create the cat at that fixed position
		Instantiate(catPrefab,Vector3(5.53,1.8426,10),Quaternion.identity);
	}
	
	
	if (objectToGenerate ==2)
	{
		//bench
		Instantiate(benchPrefab,Vector3(5.53,-0.938,10),Quaternion.identity);
	}
	
	if (objectToGenerate ==3)
	{
		//couple
		Instantiate(couple,Vector3(5.53,-0.479,10),Quaternion.identity);
	}
	
		if (objectToGenerate ==4)
	{
		
		Instantiate(Hydrant,Vector3(5.53,-0.6,10),Quaternion.identity);
	}

			if (objectToGenerate ==5)
	{
		
		Instantiate(Photographer,Vector3(5.53,-0.76,10),Quaternion.identity);
	}
	
			if (objectToGenerate ==6)
	{
		//traffic light	
		Instantiate(TrafficLightPrefab,Vector3(5.53,-0.708,10),Quaternion.identity);
	}
	
				if (objectToGenerate ==7)
	{
	
		Instantiate(car,Vector3(5.53,0,8),Quaternion.identity);
	}

}

function Update () {

	
}
