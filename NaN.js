const arr = [21 , '12' , 53 , 64 , '34' ,'swswf'];

function sum(numbers){
    let sumadd = 0;
    let srt = 0;

    for(let i of numbers){
        if(!isNaN(i) && typeof i === 'number'){
            sumadd = sumadd + i ;
        }
    else if(!isNaN(i) && typeof i === 'string'){
        let int = parseInt(i);
        srt = srt + int
    }
    }
    return `sum add ${sumadd} and string sum number ${srt}`;
}

const sums = sum(arr);

console.log(sums)