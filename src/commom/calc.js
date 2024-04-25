function Soma(a,b){
    return a + b;
}

function Sub(a,b){
    return a - b;
}

function Mult(a,b){
    return a * b;
}

function Div(a,b){
    return a / b;
}

function IsPrimo(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

module.exports = { Soma, Sub, Mult, Div, IsPrimo}