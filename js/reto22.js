const nota1 = prompt('Ingrese el valor de la nota 1');
const nota2 = prompt('Ingrese el valor de la nota 2');
const nota3 = prompt('Ingrese el valor de la nota 3');
const nota4 = prompt('Ingrese el valor de la nota 4');

/* Limpiamos y formateamos */
let nota1Parseo;
if (nota1){
    nota1Parseo = Number(nota1);
}

let nota2Parseo;
if (nota2 !== null){
    nota2Parseo = Number(nota2);
}

let nota3Parseo;
if (nota3 !== null){
    nota3Parseo = Number(nota3);
}

let nota4Parseo;
if (nota4 !== null){
    nota4Parseo = Number(nota4);
}


const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!nota1Parseo || !nota2Parseo || !nota3Parseo || !nota4Parseo){
    console.log(`El valor de una de las notas no es número`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `El valor de una de las notas no es número`;
}
else {
    const promedio = (nota1Parseo + nota2Parseo + nota3Parseo + nota4Parseo) / 4;

    console.log(`(Nota1 + Nota2 + Nota3 + Nota4) / 4  =>  (${nota1Parseo} + ${nota2Parseo} + ${nota3Parseo} + ${nota4Parseo}) / 4 = ${promedio}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `(Nota1 + Nota2 + Nota3 + Nota4) / 4  =>  (${nota1Parseo} + ${nota2Parseo} + ${nota3Parseo} + ${nota4Parseo}) / 4 = ${promedio}`;
} 