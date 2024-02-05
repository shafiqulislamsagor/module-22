const fruits = ['apple','banana','coconut','grape','mango'];

const target = '';
let foundIndex = -1;

for(let i = 0 ; i < fruits.length ;i++){
    const currentFruit = fruits[i] ;
    if(currentFruit === target){
        foundIndex = i
    }
} 

switch(foundIndex){
    case -1:
        console.log(`Not founded ${foundIndex}`);
    default:
        console.log(`founded ${foundIndex}`)
}