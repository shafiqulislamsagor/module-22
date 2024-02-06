function myNames(point) {
  let newArr = point.split(' ');
  let rev = newArr.reverse();
  let sum = 0;
  for (let i of rev) {
    
    if (i.toLowerCase().includes('s') === true) {
      sum = sum + 1
    }
    
  }
  return sum ;
}

let arr = 'My name is Shafiqul islam sagor';

const result_ulta = myNames(arr);

console.log(result_ulta); 
