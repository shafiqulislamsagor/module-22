// const heights = [65,100, 66,68,72,77,60,58,79,96,52];

// function getMax(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }

// const max = getMax(heights);

// console.log('max value is -',max)

const heights = [65,100,22, 66,68,72,77,60,58,79,96,52];

function small(inc){
    let small = inc[0];
    for(let i of inc){
        if(small > i){
            small = i;
        }
    }
    return small;
}

const smallPerson = small(heights);

console.log(smallPerson);