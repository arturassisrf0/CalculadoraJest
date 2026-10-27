function somar(a,b){
    return a+b;
}

function subtrair(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
if(a==0 || b==0){
    return "não é valido dividir por 0";
}

    return a/b;
}

module.exports = {somar, subtrair, multiplicar, dividir};