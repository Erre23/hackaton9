const base = prompt('Ingrese el valor de la base');
const altura = prompt('Ingrese el valor de la altura');

/* Limpiamos y formateamos */
let baseParseo;
if (base){
    baseParseo = Number(base);
}

let alturaParseo;
if (altura !== null){
    alturaParseo = Number(altura);
}


const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!baseParseo || !alturaParseo){
    console.log(`El valor de la base o altura no es número`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `El valor de la base o altura no es número`;
}
else {
    const area = (base * altura) / 2;

    console.log(`(Base * Altura) / 2 = Área  =>  (${base} * ${altura}) / 2 = ${area}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `(Base * Altura) / 2 = Área  =>  (${base} * ${altura}) / 2 = ${area}`;
} 