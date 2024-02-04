const mobile = [
    {name:'Samsung' , price: 20000 , camera: '12mp'},
    {name:'Iphone' , price: 225000 , camera: '12mp'},
    {name:'Oppo' , price: 15000 , camera: '12mp'},
    {name:'Tecno' , price: 8000 , camera: '12mp'},
    {name:'Walton' , price: 24000 , camera: '12mp'},
    {name:'Realme' , price: 17000 , camera: '12mp'},
    {name:'Redmi' , price: 22000 , camera: '12mp'},
];

function getCheapestPhone(phn){
    let min = phn[0];
    for(const phone of phn){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobile);

console.log(cheap)


function like(phn){
    let max = phn[0];
    for(const i of phn){
        if(i.price > max.price){
            max = i;
        }
    }
    return  max;
}

const favorit = like(mobile);

console.log(favorit)