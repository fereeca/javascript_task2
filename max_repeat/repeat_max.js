// find the maximum repeat array and return it as object with no. of count.


let numbers = [1,3,7,9,2,2,2,7,8,9,9];
 function maxRepeat(array){
  const result = array.reduce((acc,current) =>{
    acc[current] = (acc[current] || 0) +1;
    if (!acc.max || acc[current] > acc[acc.max]){
      acc.max= current;
    }
    return acc;
    
  }, {max:null});
  return result;
 }
 console.log(maxRepeat(numbers));
