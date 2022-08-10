const connexion = document.getElementById('connexion');

const getMessage = () => {
    alert('Vous avez cliqué sur le bouton de connexion');
}

const setColorGreen = () => {
    connexion.style.background = 'green'
}

const setColorRed = () => {
    connexion.style.background = 'red'
}

connexion.addEventListener('click', getMessage);
connexion.addEventListener('mouseenter', setColorRed);
connexion.addEventListener('mouseleave', setColorGreen);
