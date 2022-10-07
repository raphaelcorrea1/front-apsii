const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let compras = getCompras(form);
    let erros = validaCompras(compras);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaCompras(compras) {
    let erros = [];
    let codBarras = document.querySelector("#codBarras");
    let quantidade = document.querySelector("#quantidade");
    let preco = document.querySelector("#preco");
    let dtValidade = document.querySelector("#dtValidade");
    if(compras.codBarras.length == 0) {
        erros.push("Código inválido");
        codBarras.classList.add('errorInput');
    } else {
        codBarras.classList.add('successInput');
    } 

    if(compras.quantidade.length == 0){
        erros.push("Quantidade inválida");
        quantidade.classList.add('errorInput');
    } else {
        quantidade.classList.add('successInput');
    }

    if(compras.preco.length == 0){
        erros.push("Preço inválido");
        preco.classList.add('errorInput');
    } else {
        preco.classList.add('successInput');
    }

    if(compras.dtValidade.length == 0){
        erros.push("Data inválida");
        dtValidade.classList.add('errorInput');

    } else {
        dtValidade.classList.add('successInput');
    } 

    return erros;
}

function getCompras(form) {
    console.log(form.codBarras.value);
    var compras = {
        codBarras: form.codBarras.value,
        quantidade: form.quantidade.value,
        preco: form.preco.value,
        dtValidade: form.dtValidade.value
    }

    return compras;
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


