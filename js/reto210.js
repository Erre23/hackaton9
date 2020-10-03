const nombre1 = prompt('Ingrese el nombre de la primera persona');
const edad1 = prompt('Ahora ingrese la edad en años de la primera persona');
const nombre2 = prompt('Ingrese el nombre de la segunda persona');
const edad2 = prompt('Ahora ingrese la edad en años de la segunda persona');
const nombre3 = prompt('Ingrese el nombre de la tercera persona');
const edad3 = prompt('Ahora ingrese la edad en años de la tercera persona');


/* Limpiamos y formateamos */
let nombre1Parseo;
if (nombre1){
    nombre1Parseo = nombre1.trim().toUpperCase();
}

let edad1Parseo;
if (edad1 && Number(edad1)){
    edad1Parseo = Number(edad1);
}


let nombre2Parseo;
if (nombre2){
    nombre2Parseo = nombre2.trim().toUpperCase();
}

let edad2Parseo;
if (edad2 && Number(edad2)){
    edad2Parseo = Number(edad2);
}

let nombre3Parseo;
if (nombre3){
    nombre3Parseo = nombre3.trim().toUpperCase();
}

let edad3Parseo;
if (edad3 && Number(edad3)){
    edad3Parseo = Number(edad3);
}

const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!nombre1Parseo || !nombre2Parseo || !nombre3Parseo) {
    console.log(`Uno de los nombres ingresado no es un string`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `Uno de los nombres ingresado no es un string`;
}
else if (!edad1Parseo || !edad2Parseo || !edad3Parseo || edad1Parseo <= 0 || edad2Parseo <= 0  || edad3Parseo <= 0){
    console.log(`El valor de una de las edades no es número o su valor es igual o menor a cero`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `El valor de una de las edades no es número o su valor es igual o menor a cero`;
}
else {
    let menor = "";

    if (edad1Parseo < edad2Parseo && edad1Parseo < edad3Parseo)
    {
        menor = `Menor Persona 1: ${nombre1Parseo}, edad: ${edad1Parseo}`;
    }
    else if (edad2Parseo < edad1Parseo && edad2Parseo < edad3Parseo)
    {
        menor = `Menor Persona 2: ${nombre2Parseo}, edad: ${edad2Parseo}`;
    }
    else if (edad3Parseo < edad1Parseo && edad3Parseo < edad2Parseo)
    {
        menor = `Menor Persona 3: ${nombre3Parseo}, edad: ${edad3Parseo}`;
    }
    else if (edad1Parseo == edad2Parseo && edad2Parseo < edad3Parseo)
    {
        menor = `Menor Persona 1: ${nombre1Parseo}, edad: ${edad1Parseo} y Persona 2: ${nombre2Parseo}, edad: ${edad2Parseo}`;
    }
    else if (edad2Parseo == edad3Parseo && edad2Parseo < edad1Parseo)
    {
        menor = `Menor Persona 2: ${nombre2Parseo}, edad: ${edad2Parseo} y Persona 3: ${nombre3Parseo}, edad: ${edad3Parseo}`;
    }
    else
    {
        menor = `Los tres tienen la misma edad`;
    }

    console.log(`Persona 1: ${nombre1Parseo}, edad: ${edad1Parseo}`);
    console.log(`Persona 2: ${nombre2Parseo}, edad: ${edad2Parseo}`);
    console.log(`Persona 3: ${nombre3Parseo}, edad: ${edad3Parseo}`);
    console.log(menor);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `Persona 1: ${nombre1Parseo}, edad: ${edad1Parseo}<br>Persona 2: ${nombre2Parseo}, edad: ${edad2Parseo}<br>Persona 3: ${nombre3Parseo}, edad: ${edad3Parseo}<br><br>${menor}`;
} 