function salario(salarioFixo, totalVendas){
    let porcentagem = 0.15
    let bonus = totalVendas * porcentagem
    let salarioTotal = salarioFixo + bonus
    return salarioTotal
}

let funcionario1 = salario(500, 1238.3)
let funcionario2 = salario(700, 0)
let funcionario3 = salario(1700, 1230.5)

console.log(`total 1 = ${funcionario1.toFixed(2)}`)
console.log(`total 2 = ${funcionario2.toFixed(2)}`)
console.log(`total 3 = ${funcionario3.toFixed(2)}`)