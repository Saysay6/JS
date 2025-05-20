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
let kezia ="today is kezia's birthday"

// // Number
let myNum = 63;

// //Boolean
const me = true;
const you = false;

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
const myArray = ["Phyna", "James", 354,true, {name:"John"}, [2,4,6],"Raphael"];
console.log(myArray[6]);

// // functions

// Arithmetic operator
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
const d = "Christy";
const e = "Christy";
const f = "Mary";
const g = 12;
const h = 47;
const i = 12;
const j = "12"

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
 console.log("idCard", ! idCard);

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

// 6. Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.
// solution
// let secretNumber = 25;
// let guess =parseInt(prompt("Guess a number between 1 and 30:" ));
// if(guess === secretNumber){
//    alert("Correct");
// }
// else if (guess > secretNumber){
//    alert("Too high");
// }
// else if (guess < secretNumber) {
//    alert("Too low");
// }
// else{
//    alert("Invalid")
// }

           //  Function declaration
function greet(name,age,gender){
  console.log('Hello,world',name,age,gender)
}
greet('Shade',20,'female')

          // Function expression
// function takeInputFromUser (){
//   let userResponse = prompt('Enter any number')
//   console.log(userResponse)
// }
// takeInputFromUser()

function subNum(a,b){
  console.log(a-b)
}
subNum(10,5)

// 1.Take a number from a user and check if the number is greater than 6
// function pickNum(){
//   let response = parseInt(prompt('Enter number'))
//   if(response > 6){
//     console.log('number is greater than  6 ')
// }else{
//   console.log('number is less than 6')
// }
// }
// pickNum()

// 2.write a program to check the lenght of a name.
// let name = function (){}
// function name(){
//   let result = prompt('Enter your name')
//   console.log(' your name is',result.length ,' long')
// // console.log('your name is' + result.length +'long')
// }
// name()

// 3. Create a function that takes four parameter and return the highest number
// function highestNum (){
//   let a = parseInt(prompt('Enter number'))
//   let b = parseInt(prompt('Enter number'))
//   let c = parseInt(prompt('Enter number'))
//   let d = parseInt(prompt('Enter number'))
//   console.log(Math.max(a,b,c,d))
// }
// highestNum()
            //  Arrow functions
// () => {}
  // let checkCharacter = () => {
  //   let answer = prompt('Enter your name')
  //   console.log('Your name is',answer.length,'long')
  // }
  // checkCharacter()

  // 4.Write an arrow function that divides two numbers.
  let num = (d,b) => {
    console.log(d/b)
  }
  num(6,2)

  // 5.Write a function that checks if a number is even or odd.
  function evenNum(){
    let eveNum = parseInt(prompt("Enter any number"))
    if(eveNum % 2 === 0){
      console.log('This is an even number')
    }else{
     console.log('This is an odd number')
    }
  }
  evenNum()

  // 5.Write a function that reverses a string.
  // 6.Write a function that returns  the longest word in a sentence.

