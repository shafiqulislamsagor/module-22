function add(num1,num2){
    return num1+num2
}
function sub(num1,num2){
    return num1-num2
}
function mul(num1,num2){
    return num1*num2
}
function div(num1,num2){
    return num1/num2
}

function calculator(a,b,oparator){
    if(oparator === 'add'){
        return add(a,b)
    }
    else if(oparator === 'sub'){
        return sub(a,b)
    }
    else if(oparator === 'mul'){
        return mul(a,b)
    }
    else if(oparator === 'div'){
        return div(a,b)
    }
    else{
        return `Not allowed...only (+,-,*,/) used`
    }
}

const calUsed = calculator(8 , 2 , 'div');

console.log(calUsed)
