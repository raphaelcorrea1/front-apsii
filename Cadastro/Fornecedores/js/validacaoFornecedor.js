const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let fornecedor = getFornecedor(form);
    let erros = validaFornecedor(fornecedor);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaFornecedor(fornecedor) {
    let erros = [];
    let nomeFornecedor = document.querySelector("#nomeFornecedor");
    let CNPJ = document.querySelector("#CNPJ");
    let endereco = document.querySelector("#endereco");
    let email = document.querySelector("#email");
    let telefone = document.querySelector("#telefone");
    if(fornecedor.nomeFornecedor.length == 0) {
        erros.push("Nome de Fornecedor inválido");
        nomeFornecedor.classList.add('errorInput');
    } else {
        nomeFornecedor.classList.add('successInput');
    } 
        
    if(fornecedor.CNPJ.length == 0) {
        erros.push("CNPJ inválido");
        CNPJ.classList.add('errorInput');
    } else {
        CNPJ.classList.add('successInput');
    }

    if(fornecedor.endereco.length == 0){
        erros.push("Endereço inválido");
        endereco.classList.add('errorInput');
    } else {
        endereco.classList.add('successInput');
    }

    if(fornecedor.email.length == 0){
        erros.push("Email inválido");
        email.classList.add('errorInput');
    } else {
        email.classList.add('successInput');
    }

    if(fornecedor.telefone.length == 0){
        erros.push("Telefone inválido");
        telefone.classList.add('errorInput');

    } else {
        telefone.classList.add('successInput');
    } 

    return erros;
}

function getFornecedor(form) {
    console.log(form.nomeFornecedor.value);
    var fornecedor = {
        nomeFornecedor: form.nomeFornecedor.value,
        CNPJ: form.CNPJ.value,
        endereco: form.endereco.value,
        email: form.email.value,
        telefone: form.telefone.value
    }

    return fornecedor;
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


