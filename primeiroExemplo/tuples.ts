let list : [nome: string, idade: number, email: string] = ['Bill Gates', 65, 'bill@teste.com']


let list2 : [string, number] = ['Bill gates', 1]
list2.push('Steve', 2)

let listaSomenteLeitura : readonly [string, number] = ['Bill Gates', 1]
// listaSomenteLeitura.push('Steve', 2)

export enum DiaDaSemana {
    Domingo = 1,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

console.log(DiaDaSemana)
console.log(DiaDaSemana[2])
console.log(DiaDaSemana["Segunda"])
console.log(DiaDaSemana.Quarta)

export enum DiaDaSemanaString {
    Domingo = "Domingo",
    Segunda = "Segunda-Feira",
    Terca = "Terça-Feira",
    Quarta = "Quarta-Feira",
    Quinta = "Quinta-Feira",
    Sexta = "Sexta-Feira",
    Sabado = "Sábado"
}
console.log(DiaDaSemanaString.Terca)
