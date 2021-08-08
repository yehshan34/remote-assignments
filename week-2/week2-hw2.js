/* Assignment 2: Object */
/* Try to call calculate function correctly
For example, if we have an add function like this:
function add(args){
  return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
add(用類別或建構式產生的物件); // your another way */

// 方法一: 使用建構子 

function AddingUp(n1 ,n2) {
  this.n1 = n1;
  this.n2 = n2;
  this.add = function () {
    return n1 + n2;
  }
}

let sum = new AddingUp(3, 4);
console.log(sum.add());