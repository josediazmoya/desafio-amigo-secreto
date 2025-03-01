// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array o arreglo con nombres
let inputAmigos = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let amigos = [];

// Funcion para agregar amigos - Envía una alerta si no se ingresa un nombre válido, de lo contrario lo suma a la lista 'amigos'

function agregarAmigo(){
    console.log(inputAmigos.value)
    if (!inputAmigos.value) {
        alert('Por favor ingrese un nombre');
        return;
    }

    if (amigos.includes(inputAmigos.value)) {
        alert(`Ya ${inputAmigos.value} ya está en la lista, agregue un segundo nombre o apellido`);
        return;
    }

    amigos.push(inputAmigos.value);
    inputAmigos.value = '';
    inputAmigos.focus();
    actualizarLista();
    return;
} 

// Función para actualizar la lista de amigos en pantalla

function actualizarLista() {
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = amigos[i];
        listaAmigos.appendChild(nuevoNombre);
    }
}
