function calcularLitros(tempo, velocidade) {
    let distancia = tempo * velocidade
    let litros = distancia / 12
    return litros
}

let calculo1 = calcularLitros(10, 85) 
let calculo2 = calcularLitros(2, 92) 
let calculo3 = calcularLitros(22, 67) 

console.log(`${calculo1.toFixed(3)}`)
console.log(`${calculo2.toFixed(3)}`)
console.log(`${calculo3.toFixed(3)}`)
