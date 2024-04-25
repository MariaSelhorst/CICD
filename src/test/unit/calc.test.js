const { Soma,Sub, Mult, Div, IsPrimo } = require("../../commom/calc")
const { SomenteNum, Verifica} = require("../../commom/cpf")


describe('Calculadora', () => {
    describe('Soma',() => {
        it('deve retornar o resultado da soma de 1+2', () => {
            const res = Soma(1,2);
            expect(res).toBe(3);
        })
    })
    describe('Sub', () => {
        it('deve retornar o resultado da subtração de 2-1', () => {
            const res = Sub(2,1);
            expect(res).toBe(1);
        })
    })
    describe('Mult', () =>{
        it('deve retornar o resultado da multiplicacao 5*1', () =>{
            const res = Mult(5,1);
            expect(res).toBe(5)
        }),
        it('Deve retornar o resultado da multiplicacao de 3*1', () => {
            const res = Mult(3,1);
            expect(res).toBe(3);
        })
    })
    describe('Div', () =>{
        it('Deve retornar o resultado da divisao 4/2', () =>{
            const res = Div(4,2);
            expect(res).toBe(2);
        })
    })
    describe('IsPrimo', () =>{
        it('Deve retornar true se 5 é primo', () =>{
            const res = IsPrimo(5);
            expect(res).toBe(true);
        })
    })
    describe('IsPrimo', () =>{
        it('Deve retornar false se 6 não é primo', () =>{
            const res = IsPrimo(6);
            expect(res).toBe(false);
        })
    })
})

describe('CPF', () => {
    describe('Verifica', () => {
        it('Deve retornar true para o cpf valido', () =>{
            const res = Verifica('12093363917');
            expect(res).toBe(true);
        })
    })
    describe('Verifica', () => {
        it('Deve retornar false se o 10° digito for invalido', () => {
            const res = Verifica('12345678919');
            expect(res).toBe(false);
        })
    })
    describe('Verifica', () => {
        it('Deve retornar false se o 11° digito for invalido', () => {
            const res = Verifica('12345678908');
            expect(res).toBe(false);
        })
    })
})