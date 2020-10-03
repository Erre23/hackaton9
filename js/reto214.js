const lote = [
    'rojo',
    'verde',
    'blanco',
    'blanco',
    'rojo',
    'blanco',
    'rojo',
    'verde',
];

let contBlanco = 0;
let contRojo = 0;
let contVerde = 0;
let contOtro = 0;

const loteHTML = document.getElementById("lote");
loteHTML.innerHTML = 'Lote:';
for (let i = 0; i < lote.length; i++) {
    loteHTML.innerHTML += `<br> - ${lote[i]}`;
    switch (lote[i]) {
        case 'blanco':
            contBlanco++;
            break;
        case 'rojo':
            contRojo++;
            break;
        case 'verde':
            contVerde++;
            break;
        default:
            contOtro++;
            break;
    }    
}

const resultadoHTML = document.getElementById("resultado");
resultadoHTML.innerHTML = `Blanco: ${contBlanco}, Rojo: ${contRojo}, Verde: ${contVerde}, Otro: ${contOtro}`;