let test = document.getElementById('test');

test.insertAdjacentHTML(
  'beforebegin',
  `
  <div x-data>
  <button @click="$store.affichage.afficher = !$store.affichage.afficher">
    Affiche Textd
  </button>
  <div x-data x-show="$store.affichage.afficher">
    <p>Texte...</p>
  </div>
</div>

`
);
/*
Positions possibles :

beforebegin → avant l’élément lui-même

afterbegin → au début de l’élément

beforeend → à la fin de l’élément

afterend → après l’élément
*/
