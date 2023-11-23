// Write a JavaScript function that takes an array of numbers and uses the reduce
// function to find both the maximum and minimum values in the array. The function
// should return an object with properties max and min, representing the maximum
// and minimum values, respectively.

const num=[5,1,2,8,2,90]

function minMax(array){

  const min= array.reduce ((acc, current) => {
    if (acc < current)
      return acc;
    
      else 
      
      return current;
      
    
    });  

    const max= array.reduce ((acc1, current1) => {

    if (acc1 > current1)
      return acc1;
    
      else
      return current1;

});

   return {
    min:min,max:max
   }
  }
  console.log(minMax(num));

// let max = {
//   max: minMax(num)
// }

// console.log (max);
// console.log(minMax(num));