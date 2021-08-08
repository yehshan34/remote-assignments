/* Assignment 1: Function and Array */

function max(numbers){
  let biggestNum = numbers[0];
  for(let i = 0 ; i < numbers.length ; i++) {
    if (biggestNum < numbers[i]) {
      biggestNum = numbers[i];
    }
  }
  console.log("result to " + biggestNum); 
}
max([1, 2, 4, 5]); // result to 5 
max([5, 2, 7, 1, 6]); // result to 7