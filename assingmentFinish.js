function calculateMoney(ticketSale) {
    const ticketPrice = 120 ;
    const janitor = 500 ;
    const staf = 8 ;
    const lunchMoney= 50 ;
    const stapExpenditure = staf * lunchMoney;
    const expenditure = janitor + stapExpenditure;
    let savingMoney = 0 ;
    if(ticketSale >= 0){
        savingMoney = (ticketPrice * ticketSale) - expenditure;
        return savingMoney;
    }
    return 'Invalid Number...!'
}


function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid..!Please..String data types..'
    }
    let arry = name.toLowerCase().split('');
    let check = arry.length - 1;
    if(arry[check] == 'a' ){
        return 'Good name'
    }
    else if(arry[check] == 'a'){
        return 'Good name'
    }
    else if(arry[check] == 'y'){
        return 'Good name'
    }
    else if(arry[check] == 'i'){
        return 'Good name'
    }
    else if(arry[check] == 'e'){
        return 'Good name'
    }
    else if(arry[check] == 'o'){
        return 'Good name'
    }
    else if(arry[check] == 'u'){
        return 'Good name'
    }
    else if(arry[check] == 'w'){
        return 'Good name'
    }
    else{
        return 'Bad Name'
    }
}



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




function password(obj) {
    if(!obj.name || !obj.birthYear|| obj.birthYear < 1000 || obj.birthYear > 9999 || !obj.siteName){
        return 'Invalid... Input correct now'
    }
    let upper = objt.siteName.split('');
    let upperWord = '';
    for(let i = 0 ; i < upper.length ; i++){
        if(i == 0){
            upperWord += upper[i].toUpperCase()
        }
        else{
            upperWord += upper[i]
        }
    }
    let result = upperWord.concat('#').concat(obj.name).concat('@').concat(obj.birthYear)
    return result;
}



function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'Invalid Input...!'
    }
    let totalAmount = 0;
    for(let i of arr){
        if(3000 <= i){
            totalAmount += i - (i * 0.2)
        }
        else{
            totalAmount += i
        }
    }
    let savingMoney = totalAmount - livingCost;
    if(savingMoney >= 0){
        return savingMoney;
    }
    else{
        return 'Earn More'
    }
}