// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Variables
let sumarAmigo = document.getElementById('amigo'); // Capturamos el input del usuario para sumar un amigo
let listaAmigos = document.getElementById('listaAmigos'); // Usamos la lista adecuada en el HTML 
let amigos = []; // Array para almacenar la lista de amigos

// Funcion para agregar amigos

function agregarAmigo(){ 

    if (!sumarAmigo.value) { // Alerta si no se introduce un nombre en el espacio para sumar amigos
        alert('Por favor ingrese un nombre');
        return;
    }

    if (amigos.includes(sumarAmigo.value)) { // Si el nombre ya existe en la lista, no se agrega
        alert(`Ya ${sumarAmigo.value} ya está en la lista, agregue un segundo nombre o apellido`);
        return;
    }

    amigos.push(sumarAmigo.value); // Agregamos el nombre al array de amigos
    sumarAmigo.value = ''; // Limpiamos el input para que el usuario pueda ingresar otro nombre
    sumarAmigo.focus(); // Volvemos a enfocar el input para que el usuario pueda ingresar otro nombre
    actualizarLista(); // Actualizamos la lista de amigos
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
    return;
}

// Funcion para sortear amigos

function sortearAmigo() {
    let sorteo = amigos[Math.floor(Math.random()*10+1)];

    if (amigos = ' ') {
        alert('No hay amigos para sortear');
        return;
    } else {
        
    }
    return sorteo;
}