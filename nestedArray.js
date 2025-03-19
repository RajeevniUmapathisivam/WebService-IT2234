//print the nested array
//[[1,2,30],[5,6],[8,5,3]]


let b =[
	[1,2,30],
	[5,6],
	[8,5,3]
];


b.forEach((n) =>{
n.forEach((i) =>{
console.log(i)})
})