const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});

test('Deve somar 15 + 2 e retornar 17', ()=>{
    expect(somar(15,2)).toBe(17);
})

test('Deve subtrair 15 - 2 e retornar 17', ()=>{
    expect(subtrair(15,2)).toBe(13);
})

test('Deve multiplicar 15 * 2 e retornar 30', ()=>{
    expect(multiplicar(15,2)).toBe(30);
})

test('Deve dividir 15 / 2 e retornar 7.5', ()=>{
    expect(dividir(15,2)).toBe(7.5);
})

test('Deve dividir 15 / 0 e retornar não é valida dividir por 0', ()=>{
    expect(dividir(15,0)).toBe("não é valido dividir por 0");
})