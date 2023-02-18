// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    let testArray = [];
    for(let i = 0; i < names.length; i++) {
        if(string.includes(names[i])){
          testArray.push(names[i])
        }
      } {
        if(testArray.length > 0){
    return "Matched dog_name"
        } else {
          return "No Matches"
        }
      }
}

console.log(findWords(dog_string, dog_names))


// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
      if(i % 2 == 0){
        arr.splice(i, 1, "even index")}
     }
    return arr
}

console.log(replaceEvens(arr))

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




//=============================================================================
// Codewars Revisited:
// #1: Complete the function that takes a non-negative integer n as input, and returns a list of 
// all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
  let arr = [];
  for(let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}

// #2 
// In JavaScript, your code is running in a function, let us step by step complete your first JS function.

function helloWorld(){
  let str = "Hello World!"
  console.log(str)
}

// #3
// Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    return (n%x)==0 && (n%y) == 0;
}


// #4 
// Grasshopper - Check for factor
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
    return base % factor ==0;
  }