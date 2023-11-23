// Create a function that takes an array of numbers and returns a new array with
// only the unique numbers (remove duplicates).

const num=[2,2,3,3,5,6,1,9,0,3]

function removeDup(array){

  let unique=[];

  for (let i =0 ; i<array.length; i++){
    if (unique.indexOf(array[i])=== -1){
      unique.push(array[i]);

    }

  }

  return unique;

}

console.log(removeDup(num));