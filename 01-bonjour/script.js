const titre = document.querySelector('h1');
titre.textContent = 'Salut !';
const intro = document.querySelector('.intro');
intro.style.color = '#ff6600';
let compte = 0;
const bouton = document.getElementById('bouton-compteur');
const affichage = document.getElementById('compteur');
bouton.addEventlistener('click', function ('compteur') {
  compte = compte + 1;
  affichage.textContent = compte;
});
