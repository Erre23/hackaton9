const dato1 = prompt('Ingrese un primer dato');
const dato2 = prompt('Ingrese un segundo dato');


/* Limpiamos y formateamos */
let dato1Parseo = "";
if (dato1 !== null){
    dato1Parseo = dato1.trim().toUpperCase();
}

let dato2Parseo = "";
if (dato2 !== null){
    dato2Parseo = dato2.trim().toUpperCase();
}

let resultado;
let resultadoMensaje;
const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");
if (dato1Parseo === "" || dato2Parseo === ""){
    console.log(`Debe ingresar ambos datos`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML =`Debe ingresar ambos datos`;
}
else {
    if (!isNaN(Number(dato1Parseo)) && !isNaN(Number(dato2Parseo))) {
        resultado = Number(dato1Parseo) + Number(dato2Parseo);
        resultadoMensaje = ", el resultado es un número"; 
    }
    else {
        resultado = dato1Parseo + dato2Parseo;
        resultadoMensaje = ", el resultado es un string";
    }

    console.log(`Dato 1: ${dato1Parseo} + Dato 2: ${dato2Parseo} = Resultado: ${resultado} ${resultadoMensaje}`);  
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML =`Dato 1: ${dato1Parseo} + Dato 2: ${dato2Parseo} = Resultado: ${resultado} ${resultadoMensaje}`; 
}