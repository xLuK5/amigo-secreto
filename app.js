// Backup of app.js before modifications. Original code is not available.
let listaNombres = [];

// function elegirAmigoAleatorio() {
//     let listaHTML = document.getElementById('listaAmigos');
//     listaHTML.innerHTML = ""; // Clear the list before displaying the selected amigo

//     if (listaNombres.length > 0) {
//         const randomIndex = Math.floor(Math.random() * listaNombres.length);
//         const amigoSeleccionado = listaNombres[randomIndex];
//         let li = document.createElement('li');
//         li.textContent = amigoSeleccionado;
//         listaHTML.appendChild(li);
//     } else {
//         alert("No hay amigos para sortear.");
//     }
// }

function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    
    if (nombres !== '') {
        listaNombres.push(nombres);
        console.log(nombres);
        console.log(listaNombres);
        document.getElementById('amigo').value = '';
        console.log(nombres);

        let listaHTML = document.getElementById('listaAmigos');
        listaHTML.innerHTML= "";
        listaNombres.forEach(function(amigo) {
            let li = document.createElement('li');
            li.textContent = amigo;
            listaHTML.appendChild(li);
        });
    } else {
        alert("Por favor ingresa un nombre");
    }
}

function elegirAmigoAleatorio() {
    let amigoAleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    let resultado = document.getElementById('resultado');
    let listaHTML = document.getElementById('listaAmigos');
        listaHTML.innerHTML= "";
    resultado.innerHTML = `El amigo elegido aleatoriamente es: ${amigoAleatorio}`;
}
