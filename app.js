// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista de amigos inicial


function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    if (nombre === "") {
        alert("El nombre no puede estar vacío");
    } else {
        amigos.push(nombre);
        document.querySelector("#amigo").value = "";
        console.log(amigos); 
    }
}