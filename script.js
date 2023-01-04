let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let res = document.getElementById('res')

function calcular() {
    let N_altura = Number(altura.value)
    let N_peso = Number(peso.value)
    let imc = N_peso / (N_altura**2)
    if (imc<18.5) {
        return res.innerHTML=`Seu IMC é de ${imc.toFixed(2)}! Você está abaixo do peso considerado ideal!`
    } else if (imc==18.5 || imc<24.9) {
        return res.innerHTML=`Seu IMC é de ${imc.toFixed(2)}! Você está dentro do peso ideal!`
    } else if (imc==25 || imc<29.9) {
        return res.innerHTML=`Seu IMC é de ${imc.toFixed(2)}! Você está com sobrepeso!`
    } else if (imc==30 || imc<39.9) {
        return res.innerHTML=`Seu IMC é de ${imc.toFixed(2)}! Você possui obesidade!`
    } else {
        return res.innerHTML=`Seu IMC é de ${imc.toFixed(2)}! Você possui obesidade grave!`
    }
}