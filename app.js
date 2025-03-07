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
        let nuevoNombre = document.createElement('li'); // Creamos un nuevo elemento para cada amigo
        nuevoNombre.textContent = amigos[i]; // Agregamos el nombre del amigo al elemento
        listaAmigos.appendChild(nuevoNombre); // Agregamos el elemento a la lista mostrada en pantalla
    }
    return;
}

// Funcion para sortear amigos

function sortearAmigo() {
    if (amigos.length === 0) { // Si no hay amigos en la lista no se hace el sorteo
        alert('No hay amigos para sortear, agregue al menos 3 nombres para mejor funcionamiento');
        return;
    }
       
    let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteamos un amigo de la lista, redondeando los decimales
    let amigoGanador = document.getElementById('resultado'); // Se asigna el ganador al elemento del HTML
    amigoGanador.innerHTML = `¡Que suerte! ${amigoAleatorio} ganó el sorteo del Amigo Secreto`; // Mostramos el resultado del sorteo
    return;
}