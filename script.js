let botonnoseve = document.getElementById('botonnoseve');
let noseve = document.getElementById('noseve');

botonnoseve.addEventListener('click', toggletext);

function toggletext() {
    noseve.classList.toggle('show');
}
