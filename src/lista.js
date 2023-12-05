const lista = ["Um", "Dois", "Três"];

export function getLista(){
    return lista;
}

export function limpaLista(){
    lista.splice(0);
}

export function adicionaNaLista(novoItem){
    lista.push(novoItem);
}

export function removeDaLista(posicao){
    lista.splice(posicao, 1);
}

//export {getlista};