const form = document.getElementById('signin-form');

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const button = document.getElementById('signin-btn');
const message = document.getElementById('msg');


const signinForm = (e)=>{
    
    if(username.value.trim() === ''){
        message.innerHTML = 'please fill the field';
        message.style.backgroundColor = 'red';
        message.style.color= 'white';
        message.style.fontSize = '16px';
    } else if (password.value.trim()===''){
        message.innerHTML = 'please fill the field';
        message.style.backgroundColor = 'red';
        message.style.color= 'white';
        message.style.fontSize = '16px';
    }
    else{
        return true;
    }
    e.preventDefault();

};

form.addEventListener('submit',signinForm);