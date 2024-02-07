let news = 'this is party time';

let solo = news.split(' ');

let rev = solo.map(function(items){
    let sum = solo[0] ;
    if(sum !== items){
        sum = items +' '+sum
    }
    return sum;
})


console.log(rev)