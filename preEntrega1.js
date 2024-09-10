// Lista de planes de suscripción
const planes = [
    { nombre: "Auditoria Financiera", precio: 150000 },
    { nombre: "Consultoria Financiera", precio: 200000 },
    { nombre: "Auditoria Tributaria", precio: 200000 },
    { nombre: "Consultoria Tributaria", precio: 250000 }
];

// Saludo inicial y presentación
const saludoInicial = alert("Estimado cliente, le damos la bienvenida a AH-DR Auditores y Consultores. Es un placer tenerlo con nosotros.");

// Función para manejar la suscripción
function quieroSuscribirme() {
    // Preguntar al cliente si se quiere suscribir
    const empezarSuscripcion = prompt("¿Te gustaría suscribirte? (1: Sí, 2: No)");

    if (empezarSuscripcion === "1") {
        let mensajePlanes = "¿Qué tipo de servicio le gustaría contratar? A continuación, le presentamos nuestras tarifas: \n";
        
        // Generar la lista de planes con su precio
        for (let i = 0; i < planes.length; i++) {
            mensajePlanes += `${i + 1}: ${planes[i].nombre} - $${planes[i].precio.toLocaleString()} CLP\n`;
        }

        // Mostrar los planes y pedir que el cliente elija uno
        const eleccionPlan = prompt(mensajePlanes + "Por favor, elige el número del plan que te interesa:");

        const planSeleccionado = planes[eleccionPlan - 1];

        if (planSeleccionado) {
            alert(`Has seleccionado el plan: ${planSeleccionado.nombre} por un valor de $${planSeleccionado.precio.toLocaleString()} CLP.`);
        } else {
            alert("La opción seleccionada no es válida.");
        }
    } else {
        alert("Te invitamos a revisar nuestros servicios en cualquier momento.");
    }
}

quieroSuscribirme();

