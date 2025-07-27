// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista de amigos inicial


function agregarAmigo() {
    let inputAmigo = document.querySelector("#amigo").value;
    if (!inputAmigo) {
        alert("El nombre no puede estar vacío");
    } else {
        amigos.push(inputAmigo); // Agregar el nuevo amigo al arreglo
        document.querySelector("#amigo").value = ""; // Limpiar el campo de entrada
        
        let ulListaAmigos = document.querySelector("#listaAmigos");
        ulListaAmigos.innerHTML = `<li>${inputAmigo}</li>` // Agregar el nuevo amigo al inicio de la lista
    }
}