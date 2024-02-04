function woodQuantity(chairQuantity , tableQuantity , bedQuantity){
    const perChairWood = 3 ;
    const perTableWood = 10 ;
    const perbedWood = 50 ;

    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedWood = bedQuantity * perbedWood;

    const totalWood = allBedWood + allTableWood + allChairWood;

    return totalWood;
}

const wood = woodQuantity(0,0,5);

console.log(`My wood needed ${wood}`)