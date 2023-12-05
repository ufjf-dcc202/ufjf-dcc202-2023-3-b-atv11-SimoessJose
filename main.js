import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

// Passo 1 - Ache os elementos importantes
const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');
const btnRemover = document.querySelector('#remover');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.addEventListener('click', criaElementoNaLista);
btnRemover.addEventListener('click', removeItemDaLista);

atualizarItensDeLista();

function criaElementoNaLista(){
    const texto = pEntrada.textContent;
    adicionaNaLista(texto);
    atualizarItensDeLista();
    pEntrada.textContent="";
    pEntrada.focus();
}

function limparElementosDaLista(){
    limpaLista();
    atualizarItensDeLista();
}

function atualizarItensDeLista() {
    olSaida.innerHTML = "";
    const lista = getLista();
    for (let i = 0; i < lista.length; i++){
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        olSaida.appendChild(li);
    }
}

function removeItemDaLista() {
    removeDaLista();
    atualizarItensDeLista();

}