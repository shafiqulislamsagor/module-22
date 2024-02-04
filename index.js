const disha = 56 ;
const salman = 76 ;

if(disha > salman){
    console.log('Disha will get the strawberry');
}
else{
    console.log('salman will get the strawberry');
}

function getMax(num1 , num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(54,56);
const max2 = getMax(86,62);
const max3 = getMax(258,265);
const max4 = getMax(58514,21254);

const dif1 = getMax(max1 , max2);
const dif2 = getMax(max3 , max4);

const ultimate = getMax(dif1,dif2);

console.log(ultimate);



const jim = 56 ;
const tim = 89 ;
const kim = 68 ;


if(jim > tim && jim > kim){
    console.log('Jim is bigest mal');
}
else if(tim > jim && tim > kim){
    console.log('tim is bigest ');
}
else{
    console.log('kim is always bigest mal')
}

function bigestMax(num1 , num2 , num3){
    if(num1 > num2 && num1 > num3){
        return `num1 boro ${num1}`;
    }
    else if(num2 > num1 && num2 > num3){
        return `num2 boro ${num2}`;
    }
    else{
        return `num3 boro ${num3}`
    }
}

const rot = bigestMax(5525522,445211556,45652145);

console.log(rot)





let lot = 400 ;

for(let x = 0 ; x < lot ; x++){
    console.log('I love You Habiba suna')
}
console.log("")

const Max = Math.max(12,2556,141152);
console.log('max isuing Math.max', Max)

