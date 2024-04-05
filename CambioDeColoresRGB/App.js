const Boton = document.querySelector("button")
const Color = document.getElementById("Color")

function GenerarColorHexAleatorio() {
    let Digitos = "0123456789ABCDEF"
    let ColorHex = "#"
    
    for (let i = 0; i < 6; i++) {
        let IndiceAleatorio = Math.floor(Math.random()*16);

        ColorHex += Digitos[IndiceAleatorio];
    }

    return ColorHex;
}

Boton.addEventListener("click", (e) => {
    let ColorAleatorio = GenerarColorHexAleatorio()
    // Actualizar el texto
    Color.textContent = ColorAleatorio
    // Actualizar el color de fondo 
    document.body.style.backgroundColor = ColorAleatorio
})