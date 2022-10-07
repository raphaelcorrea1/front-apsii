const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let consultaFunc = getConsultaFunc(form);
    let erros = validaConsultaFunc(consultaFunc);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaConsultaFunc(consultaFunc) {
    let erros = [];
    let CPF = document.querySelector("#CPF");
    if(consultaFunc.CPF.length == 0) {
        erros.push("Código inválido");
        CPF.classList.add('errorInput');
    } else {
        CPF.classList.add('successInput');
    } 

    return erros;
}

function getConsultaFunc(form) {
    console.log(form.CPF.value);
    var consultaFunc = {
        CPF: form.CPF.value,
    }

    return consultaFunc;
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


