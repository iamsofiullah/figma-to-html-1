const nav = document.querySelector('.nav');
const open = document.querySelector('.open');
const close = document.querySelector('.close');


open.addEventListener('click', () => {
    nav.style.display = 'inline-block';
    open.classList.add('hidden');
    close.classList.remove('hidden');
})
close.addEventListener('click', () => {
    nav.style.display = 'none';
    open.classList.remove('hidden');
    close.classList.add('hidden');
})









