const años = prompt('Ingrese la cantidad de años de antiguedad');

/* Limpiamos y formateamos */
let añosParseo;
if (años){
    añosParseo = Number(años);
}


const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!añosParseo || añosParseo <= 0){
    console.log(`El valor de la cantidad de años no es número o es igual o menor a cero`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `El valor de la cantidad de años no es número o es igual o menor a cero`;
}
else {
    let bono = 0;
    if (añosParseo <= 5){
        bono = años * 100;
    }
    else {
        bono = 1000;
    }


    console.log(`Años laborados: ${añosParseo}, bono: ${bono}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `Años laborados: ${añosParseo}, bono: ${bono}`;
} 