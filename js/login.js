var email = document.getElementById('email');
var password =  document.getElementById('pw');
var button = document.getElementById('signIn');

function login(e) {
    e.preventDefault();

     //Validation Email
     if (email.value =="") {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    } else{
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    //Validation password
    if (password.value =="") {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        
    } else{
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
    let Users = JSON.parse(localStorage.getItem('user'));
    let Found = Users.find((user)=>
         user.email == email.value && user.password === password.value
        )
    if(Found == undefined){
        alert('Verifiez votre Email ou votre mot de passe!')
    } else{
        window.location.href = 'product.html'
    }
}


button.addEventListener('click',login);