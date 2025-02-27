// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array o arreglo con nombres
let nombreAmigo = document.getElementById('amigo');
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

// Funcion para agregar amigos - Envía una alerta si no se ingresa un nombre válido, de lo contrario lo suma a la lista 'amigos'

function agregarAmigo(){
    if (!nombreAmigo.value) {
        alert('Por favor ingrese un nombre');
        return;
    }

    if (amigos.includes(nombreAmigo.value)) {
        alert(`Ya ${nombreAmigo.value} ya está en la lista, agregue un segundo nombre o apellido`);
        return;
    }

    amigos.push(nombreAmigo.value);
    actualizarLista();
} 

// Función para actualizar la lista de amigos en pantalla

function actualizarLista() {
    var nuevoNombre = document.createElement('li');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        nuevoNombre.textContent = amigos[i];
        listaAmigos.appendChild(nuevoNombre);
    }
}
