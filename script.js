var tabela = document.querySelector('#tabela');

var formNome = document.querySelector('input[name=nome]');
var formCargo = document.querySelector('input[name=cargo]');
var formTelefone = document.querySelector('input[name=telefone]');



function montarTabelaFuncionario(){

    var linha = document.createElement('tr');

    var colunaNome = document.createElement('td');
    colunaNome.textContent = (formNome.value);
    linha.appendChild(colunaNome);
    formNome.value='';

    var colunaCargo = document.createElement('td');
    colunaCargo.textContent = (formCargo.value);
    linha.appendChild(colunaCargo);
    formCargo.value='';

    var colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = (formTelefone.value);
    linha.appendChild(colunaTelefone);
    formTelefone.value='';

    var colunaExcluir = document.createElement('td');
    var linkExcluir = document.createElement('h0');
    linkExcluir.textContent = ("Clique nos dados da linha para Excluir");
    colunaExcluir.appendChild(linkExcluir);
    linha.appendChild(colunaExcluir);

   var tabelaApaga = document.querySelector('table')
   tabelaApaga.addEventListener('click', function(e){
   e.target.parentNode.remove()
   })

    tabela.appendChild(linha);
    
    
}



