const shoping = [
    {name : 'Shirt', price : 500},
    {name : 'Pent', price : 420},
    {name : 'shoes', price : 860},
    {name : 'Sunglass', price : 250}
];

function totalPrice(product){
    let price = 0 ;
    for(let i of product){
        price = price + i.price;
    }
    return price;
}

const perPerson = totalPrice(shoping);

console.log(perPerson)



// SHOPPING CARD 
// ______________________
const products = [
    {name:'shampu',price : 2 , quantity : 5},
    {name:'chiruni',price : 20 , quantity : 2},
    {name:'saban',price : 25 , quantity : 2},
    {name:'balti',price : 100 , quantity : 1}
];

function cardTotal(product){
    let total = 0 ;
    for(const i of product){
        const productItem =  i.price * i.quantity;
        total = total + productItem;
    }
    return total;
}

const shoppingCost = cardTotal(products);

console.log(shoppingCost)