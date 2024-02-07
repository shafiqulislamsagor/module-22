function macths(srt1,srt2){
    if(typeof srt1 !== 'string' || typeof srt2 !== 'string'){
        return 'Not a string, please give me string text';
    }
    let types = srt1.includes(srt2);
    if(!types){
        return `${srt1} ar modde ${srt2} nai`;
    }
    else{
        return `${srt1} ar modde ${srt2} ase`;
    }
}

const macth = macths('isNaN','is');

console.log(macth)