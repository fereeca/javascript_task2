// Write a JavaScript function that takes an array of numbers and utilizes the
// reduce method to calculate the mean (average) of the numbers. The function
// should return the mean value.

let num=[5,5,5,5,5]


function mean(array){

  let sum=array.reduce((acc,current)=>{

    return acc + current


  });
  return sum/array.length;


 
}
console.log(mean(num));