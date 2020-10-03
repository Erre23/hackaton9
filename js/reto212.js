let Salario = 1500;

/* Limpiamos y formateamos */



const tituloHTML = document.getElementById("titulo");
const resultadoHTML = document.getElementById("resultado");

let año = 1;
let texto = "";
while (año <= 6) {
  console.log(`Salario Año ${año}: ${Salario}`);
  texto += `<br>Salario Año ${año}: ${Salario}`;
  Salario = Salario + (Salario * 0.1);
  año ++;
}

tituloHTML.innerHTML = "RESULTADO: ";
resultadoHTML.innerHTML = `${texto}`;