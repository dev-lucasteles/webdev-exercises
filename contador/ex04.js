const n1 = document.getElementById('numero1')
const n2 = document.getElementById('numero2')
const res = document.getElementById('resultado')

function somar() {
    let number1 = Number(n1.value)
    let number2 = Number(n2.value)
    let soma = number1 + number2
    res.innerHTML = `A soma entre ${number1} e ${number2} é igual a <strong>${soma}</strong>`
}

function subtrair() {
    let number1 = Number(n1.value)
    let number2 = Number(n2.value)
    let subtracao = number1 - number2
    res.innerHTML = `A subtração entre ${number1} e ${number2} é igual a <strong>${subtracao}</strong>`
}

function multiplicar() {
    let number1 = Number(n1.value)
    let number2 = Number(n2.value)
    let multiplicacao = number1 * number2
    res.innerHTML = `A multiplicação entre ${number1} e ${number2} é igual a <strong>${multiplicacao}</strong>`
}

function dividir() {
    let number1 = Number(n1.value)
    let number2 = Number(n2.value)
    let divisao = number1 / number2
    res.innerHTML = `A divisão entre ${number1} e ${number2} é igual a <strong>${divisao}</strong>`
}

function gerarTabuada() {
    var numero = Number(n1.value)
    res.innerHTML = ''
    for (var i = 1; i <= 10; i++) {
        var resultadoTabuada = numero * i
        res.innerHTML += `${numero} x ${i} = <strong>${resultadoTabuada}</strong><br>`
        }
    }