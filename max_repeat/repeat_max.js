// find the maximum repeat array and return it as object with no. of count.



function countRepetition(arr){
  return arr.reduce((element, count) => {
    if(!element[count]){
      element = {...element, [count]: 1};
      return element;  
    }else{
      element = {...element, [count]:++element[count]};
      return element;
    }
  })
}

let numbers = [10,7,79,7,55,23,55,8,98,8];
let ans = countRepetition(numbers);
console.log(ans);
