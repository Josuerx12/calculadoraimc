function calcular() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = parseFloat(peso.replace(',', '.')) / Math.pow(parseFloat(altura.replace(',', '.')),2);
    const res = document.querySelector('.resposta');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    
    if (peso <= 0 || altura <= 0 || peso.length == 0 || altura.length == 0) {
        window.alert('Error: Insira peso e altura maior que zero!')
    } else if (imc < 18.5) {
        p1.innerHTML = `Seu imc foi de ${imc.toFixed(1)}`
        p2.innerHTML = `Você está muito abaixo do peso ideal!`
        p1.setAttribute('class', 'resultado');
        p2.setAttribute('class', 'resultado');
        res.appendChild(p1);
        res.appendChild(p2);
    } else if (imc >= 18.5 && imc <= 24.9) {
        p1.innerHTML = `Seu imc foi de ${imc.toFixed(1)}`
        p2.innerHTML = `Você está no seu peso ideal!`
        p1.setAttribute('class', 'resultado');
        p2.setAttribute('class', 'resultado');
        res.appendChild(p1);
        res.appendChild(p2);
    } else if (imc >= 25 && imc <= 29.9) {
        p1.innerHTML = `Seu imc foi de ${imc.toFixed(1)}`
        p2.innerHTML = `Você está com obesidade de grau 1!`
        p1.setAttribute('class', 'resultado');
        p2.setAttribute('class', 'resultado');
        res.appendChild(p1);
        res.appendChild(p2);
    } else if (imc >= 30 && imc <= 39.9) {
        p1.innerHTML = `Seu imc foi de ${imc.toFixed(1)}`
        p2.innerHTML = `Você está com obesidade de grau 2!`
        p1.setAttribute('class', 'resultado');
        p2.setAttribute('class', 'resultado');
        res.appendChild(p1);
        res.appendChild(p2);
    } else {
        p1.innerHTML = `Seu imc foi de ${imc.toFixed(1)}`
        p2.innerHTML = `Você está com obesidade de grau 3!`
        p1.setAttribute('class','resultado');
        p2.setAttribute('class','resultado');
        res.appendChild(p1);
        res.appendChild(p2);
    }
}

function limparCalculo() {
    const res = document.querySelector('.resposta');
    res.innerHTML = '';
}