import{criarItemDaLista} from "./scripts/criarItemDaLista.js"; //  a instrução import para trazer a função criarItemDaLista e utilizá-la no event listener do botão de adicionar item.
import verificarListaVazia from "./scripts/verificarListaVazia.js"; 
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => { //monitorar o evento 
    //console.log(evento.target)//mostra o retorno deste evento, e o .TARGET o que está sendo referenciado
    //console.log(inputItem.value); // imprimir o valor do input item 
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);

})



verificarListaVazia(listaDeCompras);