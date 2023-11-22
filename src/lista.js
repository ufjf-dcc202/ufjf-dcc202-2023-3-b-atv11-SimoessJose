const lista = [
    "Um",
    "Dois",
    "Três"
];

function getLista(){
    return lista;
}

function adicionaNaLista(item){
    lista.push(item);
}
function removeDaLista(posicao){
    lista.splice(posicao, 1);
}
function limpaLista(){
    lista.splice(0);
}

export {getLista, adicionaNaLista, removeDaLista, limpaLista};