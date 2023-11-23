// Given an array of strings, write a function that transforms it into an object 
// where each string is a property, and the value is the length of the string.

const num=["seven", "fereeca", "tweleve"]

function lengthOfString (array){

  let length= array.reduce((acc,current) => {
   acc[current]= current.length;
  return acc;

  },{});

  return length;
}

console.log(lengthOfString(num));