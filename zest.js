function reduceToProduct(arr) {
  return arr.reduce((accumulator,currentValue) => accumulator*currentValue,1);
}

console.log(reduceToProduct([5, 2, 3, 4]));// Output: 24
