// function dayName(dayNumber){
//     if(dayNumber === 1){
//         return `Saturday`;
//     }
//     else if(dayNumber === 2){
//         return `Sunday`
//     }
//     else if(dayNumber === 3){
//         return `Monday`
//     }
//     else if(dayNumber === 4){
//         return `Tuesday`
//     }
//     else if(dayNumber === 5){
//         return `Wednesday`
//     }
//     else if(dayNumber === 6){
//         return `Thursday`
//     }
//     else if(dayNumber === 7){
//         return `Friday`
//     }
//     else{
//         return `invalid day..please give day numbers`
//     }
// }


const today = dayName(7)

console.log(today);


function dayName(dayNumber){
    switch (dayNumber){
        case 1: 
            return `Saturday`;
        case 2: 
            return `Sunday`;
        case 3: 
            return `Monday`;
        case 4: 
            return `Tuesday`;
        case 5: 
            return `Wednesday`;
        case 6: 
            return `Thursday`;
        case 7: 
            return `Friday`;
        default:
            return `invalid day.!! please , give me today number`
    }
}