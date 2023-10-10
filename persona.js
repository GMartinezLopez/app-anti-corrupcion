import { createRequire } from "module";
const require = createRequire(import.meta.url);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const personas = []; // Array para almacenar los datos de las personas

// Clase abstracta Persona

export class Persona {
  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.edad = "";
  }

  registrar() {
    rl.question("Ingrese su nombre: ", (nombre) => {
      this.nombre = nombre;

      rl.question("Ingrese su apellido: ", (apellido) => {
        this.apellido = apellido;

        rl.question("Ingrese su edad: ", (edad) => {
          this.edad = edad;

          // Guardar los datos en el array de personas
          personas.push({
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
          });

          this.saludar();

          // Preguntar si desea agregar otra persona
          rl.question("¿Desea agregar otra persona? (s/n): ", (respuesta) => {
            if (respuesta.toLowerCase() === "s") {
              this.registrar(); // Continuar registrando
            } else {
              mostrarTodasLasPersonas();
              rl.close(); // Cerrar el programa
            }
          });
        });
      });
    });
  }

  saludar() {
    console.log(
      `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  }

  bienvenida() {
    console.log("Bienvenido/a a la App móvil anti-corrupción.");
    console.log("Por favor, ingrese sus datos:");
    rl.question("¿Deseas registrarte? (s/n): ", (respuesta) => {
      if (respuesta.toLowerCase() === "s") {
        this.registrar(); // Continuar registrando
      } else {
        mostrarTodasLasPersonas();
        rl.close(); // Cerrar el programa
      }
    });
  }
}

export const persona1 = new Persona();
persona1.bienvenida();

// Función para mostrar todos los datos almacenados en el array al final
export function mostrarTodasLasPersonas() {
  console.log("Datos de todas las personas ingresadas:");
  personas.forEach((persona, index) => {
    console.log(
      `${index + 1}: ${persona.nombre} ${persona.apellido}, ${
        persona.edad
      } años.`
    );
  });
}

class Usuario extends Persona {
  constructor(
    username,
    curp,
    correo,
    contraseña,
    telefono,
    direccion,
    notificaciones
  ) {
    super(nombre, apellido, edad);
    this.username = username;
    this.curp = curp;
    this.correo = correo;
    this.contraseña = contraseña;
    this.telefono = telefono;
    this.direccion = direccion;
    this.notificaciones = notificaciones;
  }

  registrar() {
    console.log(`${this.nombre} se ha registrado.`);
  }

  iniciarSesion() {
    console.log(`${this.username} ha iniciado sesión.`);
  }

  cerrarSesion() {
    console.log(`${this.username} ha cerrado sesión.`);
  }

  iniciarSesion() {
    console.log(`${this.username} ha iniciado sesión.`);
  }

  verEstadoReporte() {
    console.log(`${this.nombre} ha visto el estado de su reporte.`);
  }
}