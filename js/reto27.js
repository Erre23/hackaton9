const metros = prompt('Ingrese la cantidad en metros de tela requerida');

/* Limpiamos y formateamos */
let metrosParseo;
if (metros){
    metrosParseo = Number(metros);
}

const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!metrosParseo){
    console.log(`LA cantidad ingresada no es número`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `La cantidad ingresada no es número`;
}
else {
    const pulgadaEnMetros = 0.0254;
    const pulgadasTotales = metrosParseo / pulgadaEnMetros

    console.log(`CantidadDeMetros / ValorPulgadaEnMetros = PulgadasTotal  =>  ${metrosParseo} / ${pulgadaEnMetros} = ${pulgadasTotales}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `CantidadDeMetros / ValorPulgadaEnMetros = PulgadasTotal  =>  ${metrosParseo} / ${pulgadaEnMetros} = ${pulgadasTotales}`;
} 