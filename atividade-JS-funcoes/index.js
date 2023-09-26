//Funções com JS

function calcularValores(){
    const num1 = Number(prompt('Digite um número:'))
const num2 = Number(prompt('Digite outro número:'))
const operacao = prompt(`Digite que operação você quer fazer: 
                                + (soma), 
                                - (subtração)
                                * (multiplicação)
                                / (divisão)`)

if (isNaN(num1) || isNaN(num2)) {
    alert("Número inválido")
} else {
    if (operacao == '+') {
        soma(num1, num2)
    } else if (operacao == '-') {
        subtracao(num1, num2)
    } else if (operacao == '*') {
       multiplicacao(num1, num2)
    } else if (operacao == '/') {
       divisao(num1, num2)
    } else {
        alert('Erro de digitação')
    }
}
}

function soma(num1, num2){
    alert(`A soma dos valores é ${num1 + num2}`)
}

function subtracao(num1, num2){
    alert(`A subtração dos valores é ${num1 - num2}`)
}

 const multiplicacao = (num1, num2) => {
    alert(`A multiplicaçao dos valores é ${num1 * num2}`)
}

const divisao = (num1, num2) => {
    alert(`A divisão dos valores é ${num1 / num2} e o resto é ${num1 % num2}`)
}

calcularValores()