const Input = document.getElementById("ingresarTarea")
const Boton = document.querySelector("Button")
const ListaDeTareas = document.getElementById("ListaDeTareas")

function AgregarTarea() {
    if (Input.value) {
        let TareaNueva = document.createElement("Div");
        TareaNueva.classList.add("Tarea");

        let Texto = document.createElement("p");
        Texto.innerHTML = Input.value;
        TareaNueva.appendChild(Texto)

        let Iconos = document.createElement("div");
        Iconos.classList.add("Iconos");
        TareaNueva.appendChild(Iconos)

        let Completar = document.createElement("i");
        Completar.classList.add("bi","bi-check-circle-fill","IconoCompletar")
        Completar.addEventListener("click",CompletarTarea)

        let Eliminar = document.createElement("i");
        Eliminar.classList.add("bi","bi-trash3-fill","IconoEliminar")
        Eliminar.addEventListener("click",EliminarTarea)
        
        Iconos.append(Completar, Eliminar)

        ListaDeTareas.appendChild(TareaNueva)
    } else {
        alert("Por favor ingresa una tarea.")
    }
}

function CompletarTarea(e) {
    let Tarea = e.target.parentNode.parentNode
    Tarea.classList.toggle("TareaCompletada");
}

function EliminarTarea(e) {
    let Tarea = e.target.parentNode.parentNode
    Tarea.remove();

}

Boton.addEventListener("click",AgregarTarea)

Input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        AgregarTarea() 
    }
})