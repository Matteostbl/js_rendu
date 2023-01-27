const container = document.querySelector('.container');
let h2rmv =document.getElementById('element');
var ajout = document.getElementById('id_container');
container.innerHTML= "<h1>Etape 1 de l\'exercice 2 réussi !</h1>";

h2rmv.remove();
ajout.insertAdjacentHTML('afterend', '<h2>Voici un petit paragraphe rajouté avec insertAdjacentHTML</h2>')
