function validadeFields(){
   const passwordValid = isPasswordValid();
   document.getElementById('btnLogin').disabled = !passwordValid;
}

function ispasswordValid(){
    const password = document.getElementById('password').value;
    if(!password){
        return false;
    }
    return true;
}

