const newUsername = document.getElementById('new-username');
const newEmail = document.getElementById('new-email');
const newPassword = document.getElementById('new-password');
const signupBtn = document.getElementById('signup-btn');
const error = document.getElementById('error');
const form1 = document.getElementById('signup-form');
const signupForm = (e)=>{
   
    if(newUsername.value.trim() ===''){
        error.innerHTML = 'please all fill the field';
        error.style.backgroundColor = 'red';
        error.style.color= 'white';
        error.style.fontSize = '16px';
    } else if(newEmail.value.trim()===''){
        error.innerHTML = 'please all fill the field';
        error.style.backgroundColor = 'red';
        error.style.color= 'white';
        error.style.fontSize = '16px';
    } else if (newPassword.value.trim() === ''){
        error.innerHTML = 'please fill all the field';
        error.style.backgroundColor = 'red';
        error.style.color= 'white';
        error.style.fontSize = '16px';
}
else{
    return true;
}
e.preventDefault();
}
form1.addEventListener('submit',signupForm)