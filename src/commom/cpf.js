

function SomenteNum (cpf){
    if(!isNaN(cpf)){
        return false;
    }
    return true;
}

function Verifica(cpf){

    
    if(cpf.length != 11){
        return false;
    }
    
    let Soma = 0;
    
    for(let i = 0; i < 9; i++){
        Soma += cpf[i] * (10 - i);
    }
    
    let resto = Soma % 11;
    // condição ? retorno verdadeiro : retorno falso
    let digitoCerto = resto < 2 ? 0 : 11 - resto;
    
    if(cpf[9] != digitoCerto) {
        return false;
    }

    Soma = 0;

    for(let i = 1; i < 10; i++){
        Soma += cpf[i] * (11 - i);
    }

    resto = Soma % 11;
    digitoCerto = resto < 2 ? 0 : 11 - resto;

    if(cpf[10] != digitoCerto) {
        return false;
    }

    return true;
}

module.exports = {SomenteNum, Verifica}