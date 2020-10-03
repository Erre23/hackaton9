const añoNacimiento = prompt('Ingrese el año de nacimiento');

/* Limpiamos y formateamos */
let añoNacimientoParseo;
if (añoNacimiento){
    añoNacimientoParseo = Number(añoNacimiento);
}

const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!añoNacimientoParseo || añoNacimientoParseo <= 0){
    console.log(`No ingresó un número como año de nacimiento o su valor es igual o menor a cero`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `No ingresó un número como año de nacimiento o su valor es igual o menor cero`;   
}
else {
    const añoActual = new Date().getFullYear(); 
    const edad = (añoActual - añoNacimientoParseo);
    let mensaje ="";
    if(añoActual < añoNacimientoParseo) {
        mensaje = ", parece que es un personaje de DARK porque viene del futuro";
    }
    else if (edad < 18 ){ 
        mensaje = ", es un menor de edad";
    }

    console.log(`AñoActual - AñoDeNacimiento = Edad  =>  ${añoActual} - ${añoNacimientoParseo} = ${edad} ${mensaje}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `AñoActual - AñoDeNacimiento = Edad  =>  ${añoActual} - ${añoNacimientoParseo} = ${edad} ${mensaje}`;
} 