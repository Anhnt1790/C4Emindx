function randomFunction(){
    //random number from 0 to x
    let random = Math.floor(Math.random()*11);
    return random;
};
console.log(randomFunction());

function randomNum(a, b){
    //random a number x form 0 to b-a
    let ranDom = Math.floor(Math.random()*(b-a));
    //return a + x
    return a + ranDom;
};

console.log(randomNum(5, 10));
console.log(randomNum(5, 10));
console.log(randomNum(5, 10));
console.log(randomNum(5, 10));
console.log(randomNum(5, 10));
console.log(randomNum(5, 10));
console.log(randomNum(5, 10));
console.log(randomNum(5, 10));
