const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const datos = [];

function ingresarDato() {
  rl.question('Ingrese un dato (o escriba "salir" para terminar): ', (respuesta) => {
    if (respuesta.toLowerCase() === 'salir') {
      rl.close();
      mostrarDatos();
    } else {
      datos.push(respuesta);
      ingresarDato();
    }
  });
}

function mostrarDatos() {
  console.log('Datos ingresados:');
  datos.forEach((dato, index) => {
    console.log(`${index + 1}: ${dato}`);
  });
}

console.log('Ingrese datos. Escriba "salir" para terminar.');
ingresarDato();