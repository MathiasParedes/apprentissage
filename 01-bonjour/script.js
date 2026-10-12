console.log('Bonjour depuis javascript');
const titre = document.querySelector('h1');
titre.textContent = 'Salut !';
const intro = document.querySelector('.intro');
intro.style.color = '#ff6600';
let compte = 0;
const bouton = document.getElementById('bouton-compteur');
const affichage = document.getElementById('compteur');
bouton.addEventListener('click', function () {
  compte = compte + 1;
  affichage.textContent = compte;
});
