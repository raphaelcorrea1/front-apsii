const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let consulFornec = getConsultaFornec(form);
    let erros = validaConsultaFornec(consulFornec);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaConsultaFornec(consulFornec) {
    let erros = [];
    let nomeForn = document.querySelector("#nomeForn");
    let CNPJ = document.querySelector("#CNPJ");
    let email = document.querySelector("#email");
    if(consulFornec.nomeForn.length == 0) {
        erros.push("Nome fornecedor inválido");
        nomeForn.classList.add('errorInput');
    } else {
        nomeForn.classList.add('successInput');
    } 
        
    if(consulFornec.CNPJ.length == 0) {
        erros.push("CNPJ inválido");
        CNPJ.classList.add('errorInput');
    } else {
        CNPJ.classList.add('successInput');
    }

    if(consulFornec.email.length == 0){
        erros.push("Email inválido");
        email.classList.add('errorInput');
    } else {
        email.classList.add('successInput');
    }

    return erros;
}

function getConsultaFornec(form) {
    console.log(form.nomeForn.value);
    var consulFornec = {
        nomeForn: form.nomeForn.value,
        CNPJ: form.CNPJ.value,
        email: form.email.value,
    }

    return consulFornec;
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


