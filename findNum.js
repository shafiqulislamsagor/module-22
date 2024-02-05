const num = [25,23,52,62,32,45,58,96,95,100,84,65,12,35,15,45,65,85,95];

function find(number){
    let maxMum = number[0];
    let minNum = number[0];

    for(let i of number){
        if(i > maxMum){
            maxMum = i;
        }
        else if(i < minNum){
            minNum = i;
        }
    }
    return `This array in Max Number ${maxMum} and Min Number ${minNum}`
}

const result = find(num);

console.log(result)