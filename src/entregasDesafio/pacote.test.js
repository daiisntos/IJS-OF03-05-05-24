const module = require("./pacote");
const {calcularValorTotalProjeto} = require("./pacote");

describe("calcularValorTotalprojeto",() =>{
    test("valor para o pacote intermediario")
    const funcionalidades = ["setup","integracao_mailchimp"];
    const valorHora = 50;
    const valorEsperado = calcularValorbase(100, valorHora)*TAXAS_CONTRATUAIS_POR_PACOTE["pacote_intermediario"];

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
expect(resultado).toEqual(valorEsperado);

test("valor para o pacote Premium")
const funcionalidade = ["setup","integracao_api_propria","integracao_mailchimp"];
const valorHoras = 50;
const valoresEsperado = calcularValorbase(200, valorHora)*TAXAS_CONTRATUAIS_POR_PACOTE["pacote_premium"];

const resultados = calcularValorTotalProjeto(funcionalidades, valorHoras);
expect(resultados).toEqual(valoresEsperado);

    

})