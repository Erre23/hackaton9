const soles = prompt('Ingrese el valor total de soles');
const tipoDeCambio = prompt('Ahora ingrese el valor del tipo de cambio a dólares');

/* Limpiamos y formateamos */
let solesParseo;
if (soles){
    solesParseo = Number(soles);
}

let tipoDeCambioParseo;
if (tipoDeCambio !== null){
    tipoDeCambioParseo = Number(tipoDeCambio);
}


const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

if (!solesParseo || !tipoDeCambioParseo || solesParseo <= 0 || tipoDeCambioParseo <= 0){
    console.log(`El valor del total de soles o el tipo de cambio no es número o son un valor menor o igual a 0`);   
    tituloHTML.innerHTML = "MENSAJE: ";
    resultadoHTML.innerHTML = `El valor de las horas trabajadas o costo por hora no es número o son un valor menor o igual a 0`;   
}
else {
    const total = solesParseo / tipoDeCambioParseo;

    console.log(`Soles / TipoDeCambio = TotalDoláres  =>  ${solesParseo} / ${tipoDeCambio} = ${total}`);
    tituloHTML.innerHTML = "RESULTADO: ";
    resultadoHTML.innerHTML = `Soles / TipoDeCambio = TotalDoláres  =>  ${solesParseo} / ${tipoDeCambio} = ${total}`;
} 