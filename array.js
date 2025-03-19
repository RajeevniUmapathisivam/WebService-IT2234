let a =[1,8,3,4,5]
console.log(a)

for(let i=0;i<a.length;i++)
{
	console.log(a[i])
}

console.log("Using foreach loop")
a.forEach((n) =>
{
	console.log(n)
})

//maximum number in the array using forEach
let max=0;
a.forEach((n)=>
{
	
		(max <n) && (max =n)
	
})
console.log("Max is: "+max) 
