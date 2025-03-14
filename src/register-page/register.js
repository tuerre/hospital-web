const btnConfirm =  document.getElementById('btn-confirm');
const formContainer = document.getElementById('login__Container');
const btnNext = document.getElementById('btn-next');
const notification = document.getElementById('notification');

btnConfirm.addEventListener('click', () => {
    formContainer.style.display = 'none';
    notification.style.display = 'flex';
})
