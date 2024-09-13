class Estudiante {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        const suma = this.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        return suma / this.calificaciones.length;
    }
}

let estudiantes = [];

function agregarEstudiantesySusNotas() {
    const nombre = document.getElementById('nombre').value;
    const notas = document.getElementById('notas').value.split(',').map(Number);

    if (nombre && notas.length > 0) {
        estudiantes.push(new Estudiante(nombre, notas));
        document.getElementById('nombre').value = '';
        document.getElementById('notas').value = '';
        alert('Estudiante agregado exitosamente.');
    } else {
        alert('Por favor, ingrese un nombre y notas válidas.');
    }
}

function calcularPromedioGeneral() {
    if (estudiantes.length === 0) return 0;
    const sumaPromedios = estudiantes.reduce((acc, estudiante) => acc + estudiante.obtenerPromedio(), 0);
    return sumaPromedios / estudiantes.length;
}

function mostrarPromedio() {
    const promedioGeneral = calcularPromedioGeneral();
    document.getElementById('resultado').innerHTML = `<h2>Promedio General: ${promedioGeneral.toFixed(2)}</h2>`;
}

function mostrarEstudiantesPro() {
    const promedioGeneral = calcularPromedioGeneral();
    const estudiantesPorEncimaDelPromedio = obtenerEstudiantesPorEncimaDelPromedio(promedioGeneral);

    let resultadoHtml = `<h2>Promedio General: ${promedioGeneral.toFixed(2)}</h2>`;

    if (estudiantesPorEncimaDelPromedio.length > 0) {
        resultadoHtml += '<h3>Estudiantes por encima del promedio:</h3><ul>';
        estudiantesPorEncimaDelPromedio.forEach(estudiante => {
            resultadoHtml += `<li>${estudiante.nombre} - Promedio: ${estudiante.obtenerPromedio().toFixed(2)}</li>`;
        });
        resultadoHtml += '</ul>';
    } else {
        resultadoHtml += '<p>No hay estudiantes por encima del promedio.</p>';
    }

    document.getElementById('resultado').innerHTML = resultadoHtml;
}

function obtenerEstudiantesPorEncimaDelPromedio(promedioGeneral) {
    return estudiantes.filter(estudiante => estudiante.obtenerPromedio() > promedioGeneral);
}
