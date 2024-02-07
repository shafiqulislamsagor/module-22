function listOfName(count , userName){
    if(typeof count !== 'number' || typeof userName !== 'string'){
        return 'please, enter you data incorrect';
    }
    let sum = '';
    for(let i = 1 ; i <= count ; i++){
        sum += `Count: ${i} and Name: ${userName} || `
    }
    return sum
}

let result = listOfName(5 , 'hello');

console.log(result);

