let originalString ="4783-7-8612";

if(originalString.length>0)
{
	let reverseString ="";
	
	for(let i=originalString.length-1;i>=0;i--)
	{
		reverseString += originalString[i];
	}
	
	console.log("Left to right: "+originalString);
	console.log("Right to left: "+reverseString);
}

else
{
	console.log("String is empty");
}