function cubeNumber(number){
    if(typeof number !== 'number'){
        return `Your number text(${number}) wrong..!!`
    }
    const result = Math.pow(number,3);
    return result;
}

console.log(cubeNumber(5))