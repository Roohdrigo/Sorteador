async function sortear () {
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value);
    
    const menorValor = Number(document.querySelector('#menorValorInput').value);
    
    const maiorValor = Number(document.querySelector('#maiorValorInput').value);

    
    for(let efeito = 0; efeito < 20; efeito++) {

        const elementoHTMLResultValues = document.querySelector('.results-values');
        elementoHTMLResultValues.innerHTML = ''

        const numerosSorteados = [];

        for (let qntResultados = 0; qntResultados < totalResultados; qntResultados++) {
            let resultado;
            do {
                resultado = Math.floor((Math.random() * (maiorValor - menorValor + 1)) + menorValor);
            } 
            while (numerosSorteados.includes(resultado));
    
            numerosSorteados.push(resultado);

            const elementoHTMLDoResultado = document.createElement('div');
            elementoHTMLDoResultado.classList.add('result-value');
            elementoHTMLDoResultado.innerText = resultado;


            elementoHTMLResultValues.append(elementoHTMLDoResultado);
        }
        await wait(20)
    }
}

function wait(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}