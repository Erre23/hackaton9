const fechaNacimiento = new Date(prompt('Ingrese su fecha de nacimiento con el formato MM/dd/yyyy'));
const fechaElecciones = new Date('04/11/2021');
const fechaActual = new Date(Date.now());
const respuestaHTML = document.getElementById('respuesta');
/* Validamos que la fecha ingresada se valida */
if(Number.isNaN(fechaNacimiento.getDate())) {
    respuestaHTML.innerHTML = `El valor ingresado para la fecha de nacimiento no tiene un formato válido MM/dd/yyyy`;
/* Validamos que la fecha ingresada no sea mayor a la fecha actual o a la fecha de las elecciones */
} else if (fechaNacimiento >= fechaActual || fechaNacimiento >= fechaElecciones) {
    respuestaHTML.innerHTML = `La fecha ingresada no puede ser igual o mayor a la fecha actual o a la fecha de elecciones`;
} else {
    let puedeVotar = false;

    /* Obtenemos la diferencias de años */
    let diffAños = fechaElecciones.getFullYear() - fechaNacimiento.getFullYear();
    if (diffAños > 18 || /* Cuando la diferencia en años es mayor a 18 */
        /* Cuando la diferencia en años es igual a 18, validamos que el mes de nacimiento sea menor al mes de elecciones */
        (diffAños === 18 && fechaNacimiento.getMonth() < fechaElecciones.getMonth()) || 
        /* Cuando la diferencia en años es igual a 18 y el mes de nacimiento  y mes de elecciones son el mismo, validamos que el día de nacimiento
        sea menor o igual al día de las elecciones */
        (diffAños === 18 && fechaNacimiento.getMonth() === fechaElecciones.getMonth() && fechaNacimiento.getDate() <= fechaElecciones.getDate())){
        puedeVotar = true;
    }
        
    respuestaHTML.innerHTML = (puedeVotar ? `Excelente, usted podrá votar` : `Lo sentimos, usted aún no podrá votar`);
}