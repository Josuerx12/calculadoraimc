function calcular() {
    const displayValor = document.getElementById('resultado-valor')
    const displayResultado = document.getElementById('resultado')
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const pesoValor = parseFloat(peso.replace(',', '.'))
    const alturaValor = parseFloat(altura.replace(',', '.'))

    const imc = pesoValor / Math.pow(alturaValor, 2)

    if (peso <= 0 && altura <= 0) {
        window.alert('Error: Peso e altura deve ser maior que zero.')
        e.preventDefault()
    }

    if (imc <= 18.5) {
        displayValor.innerText = `Seu calculo do IMC foi de: ${imc.toFixed(2)}`
        displayResultado.innerText = `Você está abaixo do peso normal!`
    } else if (imc >= 18.5 && imc <= 24.9) {
        displayValor.innerText = `Seu calculo do IMC foi de: ${imc.toFixed(2)}`
        displayResultado.innerText = `Você está com o peso normal!`
    } else if (imc >= 25 && imc <= 29) {
        displayValor.innerText = `Seu calculo do IMC foi de: ${imc.toFixed(2)}`
        displayResultado.innerText = `Você está com Excesso de peso!`
    } else if (imc >= 30 && imc <= 34.9) {
        displayValor.innerText = `Seu calculo do IMC foi de: ${imc.toFixed(2)}`
        displayResultado.innerText = `Você está com obesidade de grau 1!`
    } else if (imc >= 35 && imc <= 39.9){
        displayValor.innerText = `Seu calculo do IMC foi de: ${imc.toFixed(2)}`
        displayResultado.innerText = `Você está com obesidade de grau 2!`
    } else {
        displayValor.innerText = `Seu calculo do IMC foi de: ${imc.toFixed(2)}`
        displayResultado.innerText = `Você está com obesidade de grau 3!`
    }
}

function limpar () {
    const displayValor = document.getElementById('resultado-valor')
    const displayResultado = document.getElementById('resultado')

    displayResultado.innerText = ''
    displayValor.innerText = ''
}