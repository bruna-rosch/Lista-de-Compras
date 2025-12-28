import gerarDiaDaSemana from "./gerarDiaDaSemana.js";//receber
const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemDaLista () { // export pode usar fora do arquivo 
    if (inputItem.value === ""){
        alert("Por favor, insira um item!");
        return //retorna nada, ou seja, nao vai poder executar nada

    }
    const itemDaLista = document.createElement("li"); //criação de elemento 
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");//input pega a resposta do usuario 
    inputCheckbox.type = "checkbox"; //cassificando 
    inputCheckbox.id = "checkbox"  + contador++;
    const nomeItem =  document.createElement("p"); // Cria um elemento novo no HTML
    nomeItem.innerText = inputItem.value;// Pega o valor digitado no input e coloca esse valor dentro do paragrafos

    inputCheckbox.addEventListener("click", function() { //quando o usuario clica no checkbox a função verifica o checkbox está marcado ou desmarcado.
    if (inputCheckbox.checked){ //.checked diz se o checkbox está marcado (true) ou desmarcado (false).
        nomeItem.style.textDecoration = "line-through"; //Isso risca o texto (como quando concluímos uma tarefa).
        }else{
            nomeItem.style.textDecoration = "none" // remove o risco do texto.
        }
    }
)

    containerItemDaLista.appendChild(inputCheckbox);//coloca o elemento inputCheckbox dentro do elemento containerItemDaLista
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");//classe da data
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}

