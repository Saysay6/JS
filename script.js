console.log(200)

let myAge=34;
myAge=65;
console.log(myAge);

const yourAge=57;
//yourAge=45;
console.log(yourAge);

let age;
age = 45;
console.log(age);

//Primitive data types
//string ' ' ""
//let kezia ="today is kezia's birthday"

// // Number
//let myNum = 63;

// //Boolean
// const me = true;
// const you = false;

// //Undefined
let test;
console.log(test)

// //Null
let test2 = null;
test2 = 56;
console.log(test2)

// // Non primitive data types
// // objects
const student ={
    name:"Kezia",
    age:21,
    isPregnant:true,
};
console.log(student)

// // arrays
const myArray = ["Phyna", "James", 354,true, { name:"John"}, [2,4,6]];
console.log(myArray[2]);

// // functions

//Arithmetic operator
let a = 34;
let b = 56;

// // Addition
const sum = a + b;
console.log(sum);

// // Subtraction
const sub = a - b;
console.log(sub)

// //Division
const mut = a*b;
console.log(mut)

// //Modulus
const modul = b % a;
console.log(modul);
 // //Assignment Operators
// let c = 39
// // + =
// // + -

// Comparism Operators
const d = "Jane";
const e = "Jane";
const f = "Mary";
const g =23;
const h = 47;
const i = 23;
const j = "23"

//Equals to
console.log(d == e);

// // Greater than
console.log(g > h);

// //Less than
console.log(g < h);

// //Greater than and equals to
console.log(g >= i);
 
// // Less than equals to
console.log(g != i);

 //Strictly equals to
 console.log(i == j);
 console.log(i);
 console.log(j);

 //Logical Operator
 // Logical OR || 
 // Logical NOT !
 // Logical AND &

 // //Ayo's Admission details
 const fee = true;
 const uniform = false;
 const textbooks = false;
 const idCard = false;

 const checkOR = fee || !textbooks || uniform || idCard;
 const checkAND = fee && textbooks && uniform && idCard;
 const checkAyo = fee && textbooks;
 const checkAyoAgain = (fee && idCard) || (fee && uniform);
 console.log(checkAyoAgain);
 console.log("idCard", !idCard);

 // //Unary Operator
 // // Increment ++
 // //Decrement - -
 let k = 3;
 k++;
 console.log(k);
 k--;
 console.log(k);

  // //Tenary Operator
//   (condition) ? "" : ""
  const tenTest = 76 > 45 ? "Yes, This is correct" : "No, That is wrong";
  console.log(tenTest)

  //Write a programme that tells if a user is legible  to vote

  let Age = -65;

  let voting = Age < 18 ? "You cannot vote" : "You can vote";
  console.log(voting)




