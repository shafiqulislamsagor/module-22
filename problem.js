const phoneItem = [
    {Brand: 'Iphone' , Price : 150000 , Color : 'Black'},
    {Brand: 'Oppo' , Price : 12000 , Color : 'Black'},
    {Brand: 'Samsung' , Price : 15000 , Color : 'Black'},
    {Brand: 'Realme' , Price : 13000000 , Color : 'Black'},
    {Brand: 'Walton' , Price : 200000 , Color : 'Black'},
];

function heightPrice(phoneOnly){
    let price = phoneItem[0] ;
    for(let i of phoneOnly){
        let second = i.Price
        if(price.Price < second){
            price = i
        }
    }
    return `Sob cheye dami mobile ar name ${price.Brand} and etar Price holo ${price.Price}`;
}

const heightPrice2 = heightPrice(phoneItem);

console.log(heightPrice2)