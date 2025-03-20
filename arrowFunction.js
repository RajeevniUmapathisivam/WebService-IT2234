//arrow function

const msg = ()=> {return console.log("Hello JS")}
msg()

//write an arrow function to sum 2 numbers 
const ans = ()=> {return console.log(5+3)}
ans()

const add =(a,b) =>{return a+b}
console.log(add(5,3))

//default parameter
const mul =(a,b=2) =>{return a*b}
console.log(mul(4,5))
console.log(mul(4))

//Rest parameter
 const mysum1 = (...n)=>{
	let t=0
	n.forEach((i)=>t =t+i)
	console.log(t)
	
}
mysum1(4,5,6,8,2) 

const mysum = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
	
}
console.log(mysum(4,5,6,8,2))