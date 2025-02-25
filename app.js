// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array o arreglo con nombres
let amigos = [];
let nombreAmigo = document.querySelector('input').value;
let listaAmigos = document.getElementById('listaAmigos');

// Funcion para agregar amigos - Envía una alerta si no se ingresa un nombre válido, de lo contrario lo suma a la lista 'amigos'

function agregarAmigo(){
    if (nombreAmigo == ' ') {
        alert('Por favor ingrese un nombre');
    } else {
        amigos.push(nombreAmigo);
        
        console.log(amigos);
        actualizarLista();
        limpiarCaja();
        return;
    }
}

// Se limpian los datos de la caja para ingresar un nombre nuevo

function limpiarCaja() {
    document.querySelector('input').value = '';
}

function actualizarLista() {
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let nuevosNombres = document.createElement('li');
        nuevosNombres.textContent = amigos[i];
        listaAmigos.appendChild(nuevosNombres);
        return listaAmigos;
    }
}

