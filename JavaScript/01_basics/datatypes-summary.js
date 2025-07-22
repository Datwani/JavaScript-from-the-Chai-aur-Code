// Primitive 

// 7 types : String ,Number,Boolearn,null ,undefined ,Symbol,BigInt

const score =100
const scoreVale =100.3

const IsLoggedIN =true
const outsideTemp =null
let userEmail;

const id=Symbol("123")
const anotherID=Symbol("123")

console.log(id===anotherID);

const bigNumber=5454353254363554636356453254365364n


//Reference (NON Primitive)

//Array, Objects ,Functions 

const heros=["shaktiman","naagraj","doga"]

let myObj={
    name:"Rahul",
    age:22,
}

const myFunction=function(){
        console.log("hello world")
}

console.log(typeof bigNumber);
console.log(typeof myFunction)




// *************************************

// Stack(primitive) ,Heap(Non-primitive)


let myword="Hello"

let anotherword=myword
anotherword="hello world"

console.log(myword);
console.log(anotherword);

let user1={
    email:"user@gmail.com",
    upi:"user@gdf"
}
let user2=user1
user2.email="user2@gmail.com"

console.log(user1);
console.log(user2);
