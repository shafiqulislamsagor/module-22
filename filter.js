

// const filterFormat = [];

// for(let i of number){
//     if(i <= 300){
//         filterFormat.push(i)
//     }
// }

// console.log(filterFormat)

// const filters = number.filter(function(num){
//     return num <= 300
// })

// console.log(filters)

const number = [100,355,154,326,75,256,425,356,956,125,278,265,295,245];



const discountPrice = [];

for(let i = 0 ; i < number.length ; i++){
    const current = number[i];
    if(current < 200){
        const calcu = current - (current * 10)/100;
        discountPrice.push(calcu);
    }
    else{
        discountPrice.push(current);
    }
}

console.log(discountPrice)