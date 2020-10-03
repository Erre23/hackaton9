const radio = prompt('Ingrese el valor del radio');

/* Limpiamos y formateamos */
let radioParseo;
if (radio){
    radioParseo = Number(radio);
}


const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!radioParseo){
    console.log(`El valor del radio no es número`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `El valor del radio no es número`;
}
else {
    const area = Math.pow(radio, 2) * Math.PI;

    console.log(`radio² * π = Área  =>  ${radio}² * ${Math.PI} = ${area}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `radio² * π = Área  =>  ${radio}² * ${Math.PI} = ${area}`;
} 