// Clase para manejar los planes de suscripción
class Plan {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método para mostrar el plan en formato de texto
    descripcion() {
        return `${this.nombre} - $${this.precio.toLocaleString()} CLP/mes`;
    }
}

// Lista de planes de suscripción
const planes = [
    new Plan("Auditoria Financiera", 150000),
    new Plan("Consultoria Financiera", 200000),
    new Plan("Auditoria Tributaria", 200000),
    new Plan("Consultoria Tributaria", 250000)
];

// Función para renderizar los planes en el DOM
function renderizarPlanes() {
    const contenedorPlanes = document.getElementById('planes');
    contenedorPlanes.innerHTML = ''; // Limpiar antes de renderizar

    planes.forEach((plan, index) => {
        const planDiv = document.createElement('div');
        planDiv.innerHTML = `
            <input type="radio" name="plan" value="${index}" id="plan${index}">
            <label for="plan${index}">${plan.descripcion()}</label>
        `;
        contenedorPlanes.appendChild(planDiv);
    });
}

// Función para guardar la suscripción en localStorage
function guardarSuscripcion(plan) {
    localStorage.setItem('suscripcion', JSON.stringify(plan));
}

// Función para recuperar la suscripción desde localStorage
function obtenerSuscripcion() {
    const suscripcion = localStorage.getItem('suscripcion');
    return suscripcion ? JSON.parse(suscripcion) : null;
}

// Función para manejar la suscripción
function suscribirse() {
    const seleccion = document.querySelector('input[name="plan"]:checked');
    const meses = document.getElementById('meses').value;
    
    if (seleccion && meses > 0) {
        const planSeleccionado = planes[seleccion.value];
        guardarSuscripcion(planSeleccionado);

        const total = planSeleccionado.precio * meses;

        const resumen = document.getElementById('resumen');
        resumen.innerHTML = `Te has suscrito al plan: ${planSeleccionado.nombre} por ${meses} mes(es), con un total de $${total.toLocaleString()} CLP.`;
    } else {
        const mensajeError = document.getElementById('mensaje-error');
        mensajeError.textContent = "Por favor selecciona un plan y especifica la cantidad de meses.";
    }
}

// Función para mostrar la pregunta inicial
function mostrarPreguntaSuscripcion() {
    const seccionPregunta = document.getElementById('pregunta-suscripcion');
    seccionPregunta.style.display = 'block';
}

// Función para manejar la respuesta del usuario
function manejarRespuestaSuscripcion(respuesta) {
    const seccionPregunta = document.getElementById('pregunta-suscripcion');
    const simulador = document.getElementById('simulador');
    const mensajeGracias = document.getElementById('mensaje-gracias');

    if (respuesta === 'si') {
        // Ocultar la pregunta y mostrar el simulador
        seccionPregunta.style.display = 'none';
        simulador.style.display = 'block';
    } else {
        // Ocultar la pregunta y mostrar el mensaje de agradecimiento
        seccionPregunta.style.display = 'none';
        mensajeGracias.style.display = 'block';
    }
}

// Evento para el botón de suscripción
document.getElementById('suscribirseBtn').addEventListener('click', suscribirse);

// Renderizar los planes al cargar la página
renderizarPlanes();

// Ocultar el simulador y mostrar la pregunta inicial
document.getElementById('simulador').style.display = 'none';
document.getElementById('mensaje-gracias').style.display = 'none';
mostrarPreguntaSuscripcion();



