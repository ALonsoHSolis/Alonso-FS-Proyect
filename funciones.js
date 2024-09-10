// Planes de suscripción
const planes = [
    { nombre: 'Básico', precio: 10000 },
    { nombre: 'Profesional', precio: 20000 },
    { nombre: 'Empresarial', precio: 35000 }
];

// Función para seleccionar plan
function seleccionarPlan() {
    let seleccion = prompt("Seleccione su plan (1: Básico, 2: Profesional, 3: Empresarial):");
    if (seleccion === "1") {
        return planes[0];
    } else if (seleccion === "2") {
        return planes[1];
    } else if (seleccion === "3") {
        return planes[2];
    } else {
        alert("Selección no válida. Inténtelo de nuevo.");
        return seleccionarPlan();
    }
}

// Función para calcular el costo total
function calcularCosto(plan, meses) {
    let total = 0;
    for (let i = 0; i < meses; i++) {
        total += plan.precio;
    }
    return total;
}

// Función principal para iniciar el simulador
function iniciarSimulador() {
    let planSeleccionado = seleccionarPlan();
    let meses = parseInt(prompt("¿Por cuántos meses desea suscribirse?"));
    if (isNaN(meses) || meses <= 0) {
        alert("Debe ingresar un número válido de meses.");
        iniciarSimulador();
    } else {
        let costoTotal = calcularCosto(planSeleccionado, meses);
        alert(`Ha seleccionado el plan ${planSeleccionado.nombre}. El costo total por ${meses} meses es $${costoTotal}`);
    }
}

// Iniciar el simulador automáticamente
iniciarSimulador();

