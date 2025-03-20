//write a boolean function to find a given number in prime 
function prime(num)
{
	
	if(num <=1)
	{
		return false
	}
	for(let i=2;i<num;i++)
	{
		if(num %i ==0)
		{
			return false
		}
		else
		{
			return true
		}
	}
	
}
console.log(prime(5))