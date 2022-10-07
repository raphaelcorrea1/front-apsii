const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let despesas = getDespesas(form);
    let erros = validaDespesas(despesas);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaDespesas(despesas) {
    let erros = [];
    let descricao = document.querySelector("#descricao");
    let receita = document.querySelector("#receita");
    let valorDespesa = document.querySelector("#valorDespesa");
    if(despesas.receita.length == 0) {
        erros.push("Receita inválida");
        receita.classList.add('errorInput');
    } else {
        receita.classList.add('successInput');
    } 
        
    if(despesas.descricao.length == 0) {
        erros.push("Descrição inválida");
        descricao.classList.add('errorInput');
    } else {
        descricao.classList.add('successInput');
    }

    if(despesas.valorDespesa.length == 0){
        erros.push("Valor inválido");
        valorDespesa.classList.add('errorInput');
    } else {
        valorDespesa.classList.add('successInput');
    }

    return erros;
}

function getDespesas(form) {
    console.log(form.descricao.value);
    var despesas = {
        descricao: form.descricao.value,
        receita: form.receita.value,
        valorDespesa: form.valorDespesa.value,

    }

    return despesas;
}

function exibeMensagemDeErro(erros){
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach((erro) => {
        let liErro = document.createElement("li");
        liErro.textContent = erro;
        ul.appendChild(liErro);
    })
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9.\b]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }


