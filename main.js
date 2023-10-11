"use strict";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

import { usuario } from "./clases/usuario.js";
import { informe } from "./clases/informe.js";
import { ticket } from "./clases/ticket.js";
import { evidencia } from "./clases/evidencia.js";
import { servidorPublico } from "./clases/servidorPublico.js";

const question0 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese sus datos: ", (answer) => {
      usuario.forEach(element => {
      console.log(element);
    });
      resolve();
    });
  });
};

const question01 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Desea recibir notificaciones? [s,n] ", (answer) => {
      resolve();
    });
  });
};

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("CURP: ", (answer) => {
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Contraseña: ", (answer) => {
      console.log(`\nBienvenido Jose Martinez!\n`);
      resolve();
    });
  });
};

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Pulse cualquier tecla para continuar...", (answer) => {
      resolve();
    });
  });
};

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Presentar nuevo informe? [si,no] ", (answer) => {
      if (answer == "si") {
        informe.forEach(element => {
        console.log(element);
      });
        console.log(`\n#Ticket creado y enviado a revisión#\n`);
      }else if (answer == "no") {
        console.log(`\nSaliendo\n`);
        rl.close();
      }
      resolve();
    });
  });
};

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Desea continuar o borrar el informe? [1,2] ", (answer) => {
      if (answer == 1) {
        console.clear();
        console.log(`Menú principal\n`);
      } else if (answer == 2) {
        console.log(`\nEliminado con éxito.\n`);
        rl.close();
      }
      resolve();
    });
  });
};

const question6 = () => {
  return new Promise((resolve, reject) => {
    rl.question("[Historial]  [Ayuda]  [Estado]   [H, A, E]\n", (answer) => {
      switch (answer) {
        case "H":
          console.log(`\nINFORMES:\n`);
          console.log(`-Fraude SAT\n`);
          console.log(`-Soborno a funcionario\n`);
          console.log(`-Nepotismo en gobierno\n`);
          console.log(`-Extorsión a empleados\n`);
          console.log(`-Lavado de dinero\n`);
          break;
        case "A":
          console.log(`\nSolicitud de ayuda enviada.\n`);
          break;
        case "E":
          console.log(`\nEstado actual del informe "Fraude SAT": En investigación\n`);
          break;
        default:
          question6();
          break;
      }
      resolve();
    });
  });
};

const question7 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Usuario: ", (answer) => {
      console.log(
        `\nHola Lic.${answer}! Porfavor ingresa tu contraseña para continuar\n`
      );
      resolve();
    });
  });
};

const question8 = () => {
  return new Promise((resolve, reject) => {
    rl.question(": ", (answer) => {
      resolve();
    });
  });
};

const question9 = () => {
  return new Promise((resolve, reject) => {
    rl.question(
      "[1]Asignar informe  [2]Revisar informe  [3]Consultas  [4]Reporte de estados\n",
      (answer) => {
        switch (answer) {
          case "1":
            console.log(`\nASIGNACIÓN DE INFORMES:\n`);
            console.log(`-Fraude SAT -> [Empleado 1]\n`);
            console.log(`-Soborno a funcionario -> [Empleado 2]\n`);
            console.log(`-Nepotismo en gobierno -> [Empleado 3]\n`);
            console.log(`-Extorsión a empleados -> [Empleado 4]\n`);
            console.log(`-Lavado de dinero -> [Empleado 5]\n`);
            break;
          case "2":
            console.log(`\nRevisando informe: "Fraude SAT"\n`);
            ticket.forEach(element => {
              console.log(element);
            });
            console.log(`\n*Mostrando evidencia...\n`);
            evidencia.forEach(element => {
              console.log(element);
            });
            console.log(`\n*Mostrando información del servidor publico investigado...\n`);
            servidorPublico.forEach(element => {
              console.log(element);
            });
            console.log(`\n*Terminado.\n`);
            break;
          case "3":
            console.log(`\nSolicitud de ayuda recibida, revisando consulta\n`);
            console.log(`Mensaje: `);
            console.log(`"Tengo un problema parar enviar mi informe, no aparece la categoría que me gustaria asignarle."\n`);
            console.log(`Respuesta: `);
            console.log(`"Seleccione la categoría de Fraude, será valido para su informe. -Admin"\n`);
            break;
          case "4":
            console.log(`\nESTADO DE TODOS LOS INFORMES:\n`);
            console.log(`-Fraude SAT -> [Investigando]\n`);
            console.log(`-Soborno a funcionario -> [Resuelto]\n`);
            console.log(`-Nepotismo en gobierno -> [Cerrado]\n`);
            console.log(`-Extorsión a empleados -> [Investigando]\n`);
            console.log(`-Lavado de dinero -> [Investigando]\n`);
            break;
          default:
            question6();
            break;
        }
        resolve();
      }
    );
  });
};

const main = async () => {
  console.log("\n**APP ANTI-CORRUPCIÓN**\n");
  console.log("Registro\n");
  await question0();
  await question01();
  console.clear();
  console.log("Inicie sesion\n");
  await question1();
  await question2();
  await question3();
  console.clear();
  await question4();
  await question5();
  await question6();
  await question6();
  await question6();
  await question3();
  console.clear();
  console.log("\n**APP ANTI-CORRUPCIÓN**\n");
  console.log("-Modo Administrador-\n");
  console.log("Inicie sesion:\n");
  await question7();
  await question8();
  console.clear();
  await question9();
  await question9();
  await question9();
  await question9();
  console.log("\n**Fin de la demostración**\n");
  rl.close();
};

main();
