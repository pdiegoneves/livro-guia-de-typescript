"use strict";
exports.__esModule = true;
exports.DiaDaSemanaString = exports.DiaDaSemana = void 0;
var list = ['Bill Gates', 65, 'bill@teste.com'];
var list2 = ['Bill gates', 1];
list2.push('Steve', 2);
var listaSomenteLeitura = ['Bill Gates', 1];
// listaSomenteLeitura.push('Steve', 2)
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 1] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 2] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 3] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 4] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 5] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 6] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 7] = "Sabado";
})(DiaDaSemana = exports.DiaDaSemana || (exports.DiaDaSemana = {}));
console.log(DiaDaSemana);
console.log(DiaDaSemana[2]);
console.log(DiaDaSemana["Segunda"]);
console.log(DiaDaSemana.Quarta);
var DiaDaSemanaString;
(function (DiaDaSemanaString) {
    DiaDaSemanaString["Domingo"] = "Domingo";
    DiaDaSemanaString["Segunda"] = "Segunda-Feira";
    DiaDaSemanaString["Terca"] = "Ter\u00E7a-Feira";
    DiaDaSemanaString["Quarta"] = "Quarta-Feira";
    DiaDaSemanaString["Quinta"] = "Quinta-Feira";
    DiaDaSemanaString["Sexta"] = "Sexta-Feira";
    DiaDaSemanaString["Sabado"] = "S\u00E1bado";
})(DiaDaSemanaString = exports.DiaDaSemanaString || (exports.DiaDaSemanaString = {}));
console.log(DiaDaSemanaString.Terca);
