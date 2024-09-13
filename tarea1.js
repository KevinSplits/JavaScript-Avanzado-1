function Actividad(descripcion, completado = false) {
    this.descripcion = descripcion;
    this.completado = completado;
}

Actividad.prototype.completar = function() {
    this.completado = true;
};

let Actividades = [];

function mostrarActividades() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar el contenido previo

    Actividades.forEach((actividad, index) => {
        resultadoDiv.innerHTML += `
            <div id="actividad-${index}">
                ${index + 1}. ${actividad.descripcion} - ${actividad.completado ? "Completado" : "Pendiente"}
                <button onclick="completarActividad(${index})">
                    Marcar como completado
                </button>
            </div><br>
        `;
    });
}
function agregarActividades() {
    const descripcion = document.getElementById('act').value;

    if (Actividades.length >= 10) {
        alert("No se pueden agregar más de 10 actividades.");
        return;
    }

    if (descripcion.trim() !== "") { // Asegurarse de que no esté vacío
        const nuevaActividad = new Actividad(descripcion);
        Actividades.push(nuevaActividad);
        document.getElementById('act').value = ''; // Limpiar el campo de texto
        alert("Actividad agregada");
    } else {
        alert("Por favor, ingrese una actividad.");
    }
}

function completarActividad(index) {
    if (Actividades[index]) {
        Actividades[index].completar();
        mostrarActividades(); // Actualizar la lista de actividades
    }
}