// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista de amigos inicial


function agregarAmigo() {
    let inputNombre = document.querySelector("#amigo");
    if (!inputNombre.value.trim()) { // Verificar si el campo de entrada está vacío
        alert("El nombre no puede estar vacío");
    } else {
        amigos.push(inputNombre.value); // Agregar el nuevo amigo al arreglo
        inputNombre.value = ""; // Limpiar el campo de entrada
        mostrarAmigos(); // Mostrar la lista actualizada de amigos
    }
}

function mostrarAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = amigos[i]; // Asignar el nombre del amigo al elemento de lista
        listaAmigos.appendChild(li); // Agregar el elemento de lista a la lista
    }
}

function sortearAmigo() {
    if (!amigos.length) {
        alert("No hay amigos para sortear");
    } else {
        let amigoElegido = amigos[Math.floor(Math.random() * amigos.length)]; // Elegir un amigo al azar
        let resultado = document.querySelector("#resultado");
        li = document.createElement("li"); // Crear un nuevo elemento de lista para el resultado
        li.textContent = `Tu amigo secreto es ${amigoElegido}`; // Asignar el nombre del amigo elegido al
        resultado.appendChild(li); // Agregar el elemento de lista al resultado
        }
    }