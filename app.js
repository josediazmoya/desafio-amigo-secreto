// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array o arreglo con nombres
let amigos = [];

// Funcion para agregar amigos
function agregarAmigos(){
    let nombres = document.getElementById("amigo").ariaValueText

    if (nombres == "") {
        alert("Por favor, inserte un nombre");
        console.log("ALERTA")
    } else {
        amigos.push(nombres);
    }
}
