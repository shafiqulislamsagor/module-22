const arrayPro = ['abir','kabir','jabir','rabir'];

const notAllowed = arrayPro.map(function(num){
    if(num === 'abir'){
        return `tore chini ${num}`
    }
    else{
        return num
    }
})

console.log(notAllowed)