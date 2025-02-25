// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array o arreglo con nombres
let amigos = [];

// Funcion para agregar amigos - Envía una alerta si no se ingresa un nombre válido, de lo contrario lo suma a la lista 'amigos'

function agregarAmigo(){
    let nombreAmigo = document.querySelector('input').value;

    if (nombreAmigo == ' ') {
        alert('Por favor ingrese un nombre');
    } else {
        amigos.push(nombreAmigo);
        
        // Se limpian los datos de la caja para ingresar un nombre nuevo
        document.querySelector('input').value = '';
        console.log(amigos);
    }
}
