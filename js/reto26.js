const horas = prompt('Ingrese el total horas trabajadas en la semana');
const costoHora = prompt('Ingrese el costo por hora');

/* Limpiamos y formateamos */
let horasParseo;
if (horas){
    horasParseo = Number(horas);
}

let costoHoraParseo;
if (costoHora !== null){
    costoHoraParseo = Number(costoHora);
}


const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!horasParseo || !costoHoraParseo){
    console.log(`El valor de las horas trabajadas o costo por hora no es número`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `El valor de las horas trabajadas o costo por hora no es número`;   
}
else {
    const sueldo = horasParseo * costoHora;

    console.log(`HorasTrabajadas * CostoPorHora = SueldoSemanal  =>  ${horasParseo} * ${costoHoraParseo} = ${sueldo}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `HorasTrabajadas * CostoPorHora = SueldoSemanal  =>  ${horasParseo} * ${costoHoraParseo} = ${sueldo}`;
} 