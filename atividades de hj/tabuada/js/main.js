//Pegar os Span
let tabuada = document.querySelector('.my-span');
let pegarCaminho = document.querySelector('#numero');
const CalcularTabuada = () => {
    let guardaValor = pegarCaminho.value;

    // 2x2 = 4

    tabuada.innerHTML = `         
    ${guardaValor} x 0 = ${guardaValor * 0}
    ${guardaValor} x 1 = ${guardaValor * 1}
    ${guardaValor} x 2 = ${guardaValor * 2}
    ${guardaValor} x 3 = ${guardaValor * 3}
    ${guardaValor} x 4 = ${guardaValor * 4}
    ${guardaValor} x 5 = ${guardaValor * 5}
    ${guardaValor} x 6 = ${guardaValor * 6}
    ${guardaValor} x 7 = ${guardaValor * 7}
    ${guardaValor} x 8 = ${guardaValor * 8}
    
    
    
    `;

    console.log(guardaValor);
};
