var Name = document.getElementById('name');
var lastName = document.getElementById('lastName');
var Email = document.getElementById('inputEmail');
var password = document.getElementById('password');
var confirmPw = document.getElementById('confirmPw');
var errorEmail = document.getElementById('errorEmail');
var validForm =true;
function register(e) {
    e.preventDefault();
    //Validation Name
    if (Name.value =="") {
        Name.classList.add('is-invalid');
        Name.classList.remove('is-valid');
        validForm = false; 
    } else{
        Name.classList.remove('is-invalid');
        Name.classList.add('is-valid');
    }
    //Validation LastName
    if (lastName.value =="") {
        lastName.classList.add('is-invalid');
        lastName.classList.remove('is-valid');
        validForm = false; 
    } else{
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
    //Validation Email
    console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email.value));
    if (Email.value =="") {
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
        errorEmail.innerHTML = 'Email obligatoire'
        validForm = false; 
    } else if(Email.value !="" && ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email.value)){
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
        errorEmail.innerHTML = 'Invalid Email'
        validForm = false;
    }else{
        Email.classList.remove('is-invalid');
        Email.classList.add('is-valid');
    }
    //Validation password
    console.log(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(password.value));
    if (password.value =="") {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        ErrorPw.innerHTML ='Mot de passe obligatoire'
        validForm = false; 
    } else if(password.value !="" && ! /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(password.value)){
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        ErrorPw.innerHTML =' Passwords must be at least 8 characters && Include at least: 1 lowercase letter, 1 capital letter, 1 number, 1 special character'
        validForm = false;
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
    //Validation password confirm
    if ((confirmPw.value =="") || (confirmPw.value != password.value)) {
        confirmPw.classList.add('is-invalid');
        confirmPw.classList.remove('is-valid');
        validForm = false; 
    } else{
        confirmPw.classList.remove('is-invalid');
        confirmPw.classList.add('is-valid');
    }

    var data = {
        name : Name.value,
        lastName : lastName.value,
        email : Email.value,
        password : password.value
    }


    if(validForm){
       var Users = JSON.parse(localStorage.getItem('user')) ||[];
       Users.push(data);
       localStorage.setItem('user', JSON.stringify(Users));
       window.location.href = 'login.html'

    }
}


var button = document.getElementById('signUp');
button.addEventListener('click',register);