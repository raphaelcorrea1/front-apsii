const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let vendas = getVendas(form);
    let erros = validaVendas(vendas);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaVendas(vendas) {
    let erros = [];
    let codBarras = document.querySelector("#codBarras");
    if(vendas.codBarras.length == 0) {
        erros.push("Código inválido");
        codBarras.classList.add('errorInput');
    } else {
        codBarras.classList.add('successInput');
    } 

    return erros;
}

function getVendas(form) {
    console.log(form.codBarras.value);
    var vendas = {
        codBarras: form.codBarras.value,
    }

    return vendas;
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


