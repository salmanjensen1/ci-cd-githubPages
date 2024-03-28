function pow(a, b){
    let power=1;
    for(let i=0; i<b; i++){
        power = power*a;
    }
    return power;
}

function modulo(a, b){
    return a%b
}

console.log(pow(4, 3))
console.log(modulo(9, 2))

module.exports={
    pow, modulo
}