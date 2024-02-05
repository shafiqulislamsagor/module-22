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


// const today = dayName(1)

// console.log(today);


// function dayName(dayNumber){
//     switch (true){
//         case (dayNumber === 1): 
//             return `Saturday`;
//         case 2: 
//             return `Sunday`;
//         case 3: 
//             return `Monday`;
//         case 4: 
//             return `Tuesday`;
//         case 5: 
//             return `Wednesday`;
//         case 6: 
//             return `Thursday`;
//         case 7: 
//             return `Friday`;
//         default:
//             return `invalid day.!! please , give me today number`
//     }
// }


function getSeason(monthNumber) {
    let monthName;
    switch(monthNumber){
        case 12:
            monthName = 'December'
        case 1:
            monthName = 'January';
        case 2:
            monthName = 'February';
        return `winter season ${monthName}`;
        case 3:
            monthName = 'March';
        case 4: 
            monthName = 'April';
        case 5:
            monthName = 'May';
        return `Spring season ${monthName}`;
        case 6:
            monthName = 'June';
        case 7:
            monthName = 'July';
        case 8:
            monthName = 'August';
        return `Summer season ${monthName}`;
        case 9:
            monthName = 'September';
        case 10:
            monthName = 'October';
        case 11:
            monthName = 'November';
        return `Autumn season ${monthName}`
        
    }
}

const month = getSeason(10);

console.log(month)