const notaMinimaAprobado = 11;
const listNotas = [
    {Alumno: 'Eduardo', Nota: 18}, 
    {Alumno: 'Sheyla', Nota: 16}, 
    {Alumno: 'Miguel', Nota: 8}, 
    {Alumno: 'Tatiana', Nota: 14}, 
    {Alumno: 'Carlos', Nota: 5}, 
    {Alumno: 'Meche', Nota: 19}
];

let listAprobados = [];
let listDesaprobados = [];

for (let i = 0; i < listNotas.length; i++){
    if (listNotas[i].Nota >= notaMinimaAprobado) {
        listAprobados.push(listNotas[i]);
    }
    else {
        listDesaprobados.push(listNotas[i]);
    }
}

const listadoGeneralHTML = document.getElementById("listadoGeneral");
listadoGeneralHTML.innerHTML = "LISTA DE NOTAS GENERAL: ";
for (let i = 0; i < listNotas.length; i++){    
    listadoGeneralHTML.innerHTML += `<br>Alumno: ${listNotas[i].Alumno}, Nota: ${listNotas[i].Nota}`;
}

const listadoAprobadoHTML = document.getElementById("listadoAprobado");
listadoAprobadoHTML.innerHTML = "LISTA DE APROBADOS: ";
for (let i = 0; i < listAprobados.length; i++){    
    listadoAprobadoHTML.innerHTML += `<br>Alumno: ${listAprobados[i].Alumno}, Nota: ${listAprobados[i].Nota}`;
}

const listadoDesaprobadoHTML = document.getElementById("listadoDesaprobado");
listadoDesaprobadoHTML.innerHTML = "LISTA DE DESAPROBADOS: ";
for (let i = 0; i < listDesaprobados.length; i++){    
    listadoDesaprobadoHTML.innerHTML += `<br>Alumno: ${listDesaprobados[i].Alumno}, Nota: ${listDesaprobados[i].Nota}`;
}
