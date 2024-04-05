const InputRojo = document.getElementById("Rojo")
const InputVerde = document.getElementById("Verde")
const InputAzul = document.getElementById("Azul")

const TextoRojo = document.getElementById("TextoRojo")
const TextoVerde = document.getElementById("TextoVerde")
const TextoAzul = document.getElementById("TextoAzul")

let Rojo = InputRojo.value;
let Verde = InputVerde.value;
let Azul = InputAzul.value;

TextoRojo.innerText = Rojo;
TextoVerde.innerText = Verde;
TextoAzul.innerText = Azul;

function ActualizarColor(Rojo, Verde, Azul) {
    const ColorRGB = `rgb(${Rojo}, ${Verde}, ${Azul})`
    document.body.style.backgroundColor = ColorRGB
}

InputRojo.addEventListener('change', (e) => {
    Rojo = e.target.value
    TextoRojo.innerText = Rojo
    ActualizarColor(Rojo,Verde,Azul)
})

InputVerde.addEventListener('change', (e) => {
    Verde = e.target.value
    TextoVerde.innerText = Verde
    ActualizarColor(Rojo,Verde,Azul)
})

InputAzul.addEventListener('change', (e) => {
    Azul = e.target.value
    TextoAzul.innerText = Azul
    ActualizarColor(Rojo,Verde,Azul)
})