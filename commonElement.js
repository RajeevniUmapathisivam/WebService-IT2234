/*
c =[4,5,6,3,7]
d =[8,3,2,1,5]
find the common elements between c and d */

let c =[4,5,6,3,7]
let d =[8,3,2,1,5]

for(let i=0;i<c.length;i++)
{
	for(let j=0;j<d.length;j++)
	{
		if(c[i] ==d[j])
		{
			console.log(c[i])
		}
	}
}


console.log("finding sum of 7: ")
//arr =[1,2,3,4,5,6]
//target =7
//write a code to find the all pairs that sum up to the target

let arr =[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++){
for( let j=0;j<i;j++)
{
	if(arr[i]+arr[j] ==7)
	{
		console.log(arr[i])
		console.log(arr[j])
	}
}
}
