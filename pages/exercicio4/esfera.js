function calcularVolumeEsfera(raio) {
    pi = 3.14159
    volume = (4.0 / 3) * pi * Math.pow(raio, 3)
    return volume
}

let volume1 = calcularVolumeEsfera(3)
let volume2 = calcularVolumeEsfera(15)
let volume3 = calcularVolumeEsfera(1523)

console.log(`VOLUME 1 = ${volume1.toFixed(3)}`)
console.log(`VOLUME 2 = ${volume2.toFixed(3)}`)
console.log(`VOLUME 3 = ${volume3.toFixed(3)}`)