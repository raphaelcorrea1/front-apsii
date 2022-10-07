const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let form  = document.querySelector('form');
    let funcionario = getFuncionario(form);
    let erros = validaFuncionario(funcionario);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
});

function validaFuncionario(funcionario) {
    let erros = [];
    let nomeFunc = document.querySelector("#nomeFunc");
    let escala = document.querySelector("#escala");
    let cargaHoraria = document.querySelector("#cargaHoraria");
    let email = document.querySelector("#email");
    let salario = document.querySelector("#salario");
    if(funcionario.nomeFunc.length == 0) {
        erros.push("Nome funcionário inválido");
        nomeFunc.classList.add('errorInput');
    } else {
        nomeFunc.classList.add('successInput');
    } 
        
    if(funcionario.escala.length == 0) {
        erros.push("Escala inválida");
        escala.classList.add('errorInput');
    } else {
        escala.classList.add('successInput');
    }

    if(funcionario.cargaHoraria.length == 0){
        erros.push("Carga horaria inválida");
        cargaHoraria.classList.add('errorInput');
    } else {
        cargaHoraria.classList.add('successInput');
    }

    if(funcionario.email.length == 0){
        erros.push("Email inválido");
        email.classList.add('errorInput');
    } else {
        email.classList.add('successInput');
    }

    if(funcionario.salario.length == 0){
        erros.push("Salário inválido");
        salario.classList.add('errorInput');

    } else {
        salario.classList.add('successInput');
    } 

    return erros;
}

function getFuncionario(form) {
    console.log(form.nomeFunc.value);
    var funcionario = {
        nomeFunc: form.nomeFunc.value,
        escala: form.escala.value,
        cargaHoraria: form.cargaHoraria.value,
        email: form.email.value,
        salario: form.salario.value
    }

    return funcionario;
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


