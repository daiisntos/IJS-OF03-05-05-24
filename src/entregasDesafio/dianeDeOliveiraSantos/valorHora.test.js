const module = require("./valorHora");
const {calcularValorPorHora} = require("./ValorHora");

describe("valorHora", () =>{
    test("",()=>{
        const rendaMensal = 1412;
        const valorHoraEsperado = 7;
        
        const resultado = calcularValorPorHora(rendaMensal);
        
        expect(resultado).toEqual(valorHoraEsperado);
    })
})