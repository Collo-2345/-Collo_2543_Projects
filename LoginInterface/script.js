const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnlogin = document.querySelector('.btn-login');
const closeicon = document.querySelector('.close-icon');


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnlogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

closeicon.addEventListener('click', (e)=> {
    e.preventDefault();
    wrapper.classList.add('active-iconclose');
});