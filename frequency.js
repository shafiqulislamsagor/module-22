// const frequancyArry = [0,0,0,0,0,0,0,0,0,0];

// const sampleNumber = '2356214569877456354153465465';

// for(let i = 0 ; i < sampleNumber.length ; i++){
//     const currentDigit = sampleNumber[i]
    
//     frequancyArry[currentDigit] = frequancyArry[currentDigit] + 1;
// }

// console.log(frequancyArry)

const text = 'saasasasahghsssssssssssssssasasasaaaassaaaasasass';

function count(word){
    let small = word.toLowerCase()
    let num1 = 0;
    let num2 = 0;
    let num3 = [];
    let count = 0;
    for(let i of small){
        if(i === 's'){
            num1++;
        }
        else if(i === 'a'){
            num2++;
        }
        else{
            num3.push(i);
            count++;
        }
    }
    return `S hoto ${num1} and A holo ${num2} /{This is not found ${num3} -- counted word ${count}}`
}

console.log(count(text))