const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc,item)=>{
//     return acc+item;
// },0);

// console.log(result);

const result = arr.reduce((acc, item) => {
  acc.push(acc + item);

  return acc;
},[]);
console.log(result);