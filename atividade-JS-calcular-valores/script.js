//Calculadora com JS

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
        alert(`A soma dos valores é ${num1 + num2}`)
    } else if (operacao == '-') {
        alert(`A subtração dos valores é ${num1 - num2}`)
    } else if (operacao == '*') {
        alert(`A multiplicaçao dos valores é ${num1 * num2}`)
    } else if (operacao == '/') {
        alert(`A divisão dos valores é ${num1 / num2} e o resto é ${num1 % num2}`)
    } else {
        alert('Erro de digitação')
    }
}

