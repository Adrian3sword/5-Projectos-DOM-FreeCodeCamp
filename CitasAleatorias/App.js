let BotonElem = document.getElementById("BotonCambiarCita");
let CitaElem = document.getElementById("Cita");
let AutorElem = document.getElementById("Autor");

function GenerarEnteroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function CambiarCita() {
    let indiceAleatorio = GenerarEnteroAleatorio(0,citas.length)
    CitaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    AutorElem.innerText = citas[indiceAleatorio].autor;
}

CambiarCita()

BotonElem.addEventListener('click',CambiarCita)