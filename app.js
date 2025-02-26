// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array o arreglo con nombres
let amigos = [];
let nombreAmigo = document.querySelector('input').value;

// Funcion para agregar amigos - Envía una alerta si no se ingresa un nombre válido, de lo contrario lo suma a la lista 'amigos'

function agregarAmigo(){
    if (nombreAmigo === ' ') {
        alert('Por favor ingrese un nombre');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Ese nombre ya está en la lista, agregue un segundo nombre o apellido')
        return;
    }
    amigos.push(nombreAmigo)

    limpiarCaja();
    actualizarLista();
    return;
}

function limpiarCaja() {
    document.querySelector('input').value = '';
}

function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = amigos[i];
        listaAmigos.appendChild(nuevoNombre);
    }
    return;
}
