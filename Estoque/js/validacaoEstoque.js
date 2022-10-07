const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let estoque = getEstoque(form);
    let erros = validaEstoque(estoque);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaEstoque(estoque) {
    let erros = [];
    let codBarras = document.querySelector("#codBarras");
    let descricao = document.querySelector("#descricao");
    let quantidade = document.querySelector("#quantidade");
    let preco = document.querySelector("#preco");
    let dtValidade = document.querySelector("#dtValidade");
    var categoriaI = document.querySelector("#categoria");
    var categoria =  document.querySelector("#categoria").options[categoriaI.selectedIndex].text; 
    console.log(categoria);
    if(estoque.codBarras.length == 0) {
        erros.push("Código inválido");
        codBarras.classList.add('errorInput');
    } else {
        codBarras.classList.add('successInput');
    } 
        
    if(estoque.descricao.length == 0) {
        erros.push("Descrição inválida");
        descricao.classList.add('errorInput');
    } else {
        descricao.classList.add('successInput');
    }

    if(estoque.quantidade.length == 0){
        erros.push("Quantidade inválida");
        quantidade.classList.add('errorInput');
    } else {
        quantidade.classList.add('successInput');
    }

    if(estoque.preco.length == 0){
        erros.push("Preço inválido");
        preco.classList.add('errorInput');
    } else {
        preco.classList.add('successInput');
    }

    if(estoque.dtValidade.length == 0){
        erros.push("Data inválida");
        dtValidade.classList.add('errorInput');

    } else {
        dtValidade.classList.add('successInput');
    } 

    if(estoque.categoria == "Selecionar") {
        erros.push("Categoria inválida");
        categoria.classList.add('errorInput');
    } else {
        categoria.classList.add('successInput');
    } 

    return erros;
}

function getEstoque(form) {
    console.log(form.codBarras.value);
    var estoque = {
        codBarras: form.codBarras.value,
        descricao: form.descricao.value,
        quantidade: form.quantidade.value,
        preco: form.preco.value,
        dtValidade: form.dtValidade.value,
        categoria: form.categoria.value
    }

    return estoque;
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


