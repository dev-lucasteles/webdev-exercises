function contar() {
    // 1. Pegamos os valores
    let inicioInput = document.getElementById('inicio').value;
    let fimInput = document.getElementById('fim').value;
    let passoInput = document.getElementById('passo').value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    if (inicioInput === '' || fimInput === '') {
        resultado.innerHTML = 'Por favor, preencha os campos de início e fim.';
        return;
    } 

    let inicio = parseInt(inicioInput);
    let fim = parseInt(fimInput);
    let passo = parseInt(passoInput);

    if (isNaN(passo) || passo <= 0) {
        alert('Passo inválido! O sistema vai considerar o passo como 1.');
        passo = 1;
    }

    if (inicio > fim) {
        resultado.innerHTML = 'O valor de início deve ser menor que o valor de fim.';
        return;
    }

    resultado.innerHTML = 'Contando: <br>';
    for (let i = inicio; i <= fim; i += passo) {
        resultado.innerHTML += i + " -> ";
    }
    resultado.innerHTML += "Fim";
}