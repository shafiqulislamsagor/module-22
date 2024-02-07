function deleteInvalids(array) {
    if(Array.isArray(array) !== true){
        return 'Invalid Array'
    }
    let newArray = [];
    for(let i of array){
        if(typeof i === 'number' && isNaN(i) !== true){
            newArray.push(i)
        }
    }
    return newArray;
}


