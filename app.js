//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomesAdicionados = []; // Lista global para armazenar os nomes

// Função para exibir os nomes na tela
function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag); // Seleciona o elemento com o tag fornecido
    elemento.innerHTML = texto; // Atualiza o conteúdo do elemento, com os nomes separados por <br> para criar uma nova linha
}

// Função para adicionar o nome à lista
function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value; // Pega o nome do input
    if (nome=='') {
          alert('digite um nome para prosseguir');
    }else if(listaDeNomesAdicionados.includes(nome)){ // verifica se o nome ja está na lista
      alert('Esse nome já existe, digite um nome diferente');
    }else{
      listaDeNomesAdicionados.push(nome); // Adiciona o nome à lista
      exibirTextoNaTela('#listaAmigos', listaDeNomesAdicionados.join('<br>')); // Atualiza a lista na tela
    }
     
    console.log(listaDeNomesAdicionados); // Exibe a lista no console
}

//Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

function sortearAmigo(){
   if (listaDeNomesAdicionados.lenght === 0) {
      alert('Não nomes adicionados, adicione primeiro para continuar!')
      
   }else{
      let indiceSorteado = Math.floor(Math.random() * listaDeNomesAdicionados.length);
      let nomeSorteado = listaDeNomesAdicionados[indiceSorteado];
      document.querySelector('#listaAmigos').style.display = 'none';// essa parte do código vai esconder a lista exibida antes de clicar no sorteio
      exibirTextoNaTela('#resultado',`O amigo secreto sorteado é ${nomeSorteado}`);
   }
}

