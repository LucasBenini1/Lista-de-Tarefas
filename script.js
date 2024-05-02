let elementoInput = document.querySelector("#app input");
let elementoButton = document.querySelector("#app button");
let elementoUl = document.querySelector("#app ul");

// Recuperar os dados salvos no localStorage ou inicializar como um array vazio
let listas = JSON.parse(localStorage.getItem('listaTarefas')) || [];

function mostrarListas() {
    elementoUl.innerHTML = "";
    for (let lista of listas) {
        let elementoLista = document.createElement('li');
        let textoLista = document.createTextNode(lista);

        let elementoLink = document.createElement('a');
        elementoLink.setAttribute("href", "#");
        let textoLink = document.createTextNode(' Excluir');
        elementoLink.appendChild(textoLink);
        
        let posicao = listas.indexOf(lista);
        elementoLink.setAttribute('onclick', 'deletarLista('+ posicao +')');

        elementoLista.appendChild(textoLista);
        elementoLista.appendChild(elementoLink);
        elementoUl.appendChild(elementoLista);
    }
}

mostrarListas();

function adicionarListas() {
    if (elementoInput.value == '') {
         alert("Digite alguma tarefa!");
    } else {  
        let textoLista = elementoInput.value;
        listas.push(textoLista);
        mostrarListas();
        salvarLista();
    }
}

elementoButton.onclick = adicionarListas;

function deletarLista(posicao) {
    listas.splice(posicao, 1);
    mostrarListas();
    salvarLista();
}

function salvarLista() {
    localStorage.setItem('listaTarefas', JSON.stringify(listas));
}
