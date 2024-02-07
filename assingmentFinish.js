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