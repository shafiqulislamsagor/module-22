const number = [121,355,154,326,75,256,425,356,956,125,278,265,295,245];

// const filterFormat = [];

// for(let i of number){
//     if(i <= 300){
//         filterFormat.push(i)
//     }
// }

// console.log(filterFormat)

const filters = number.filter(function(num){
    return num <= 300
})

console.log(filters)