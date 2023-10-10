import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Persona } from "./persona.js";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nombre = "";
let apellido = "";
let edad = "";
// Clase Usuario que hereda de Persona
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

// Clase Ciudadano que hereda de Usuario
class Ciudadano extends Usuario {
  constructor(
    nombre,
    edad,
    username,
    contraseña,
    informesPresentados,
    ubicacionActual
  ) {
    super(nombre, edad, username, contraseña);
    this.informesPresentados = informesPresentados;
    this.ubicacionActual = ubicacionActual;
  }

  presentarInforme() {
    console.log(`${this.nombre} ha presentado un nuevo informe.`);
  }

  eliminarInforme() {
    console.log(`${this.nombre} ha eliminado un informe.`);
  }

  verHistorialDeInformes() {
    console.log(`${this.nombre} ha visto su historial de informes.`);
  }

  solicitarAyuda() {
    console.log(`${this.nombre} ha solicitado ayuda.`);
  }
}

// Clase Admin que hereda de Usuario
class Admin extends Usuario {
  constructor(
    nombre,
    edad,
    username,
    contraseña,
    informesAsignados,
    roles,
    departamentos
  ) {
    super(nombre, edad, username, contraseña);
    this.informesAsignados = informesAsignados;
    this.roles = roles;
    this.departamentos = departamentos;
  }

  asignarInforme() {
    console.log(`${this.nombre} ha asignado un informe.`);
  }

  revisarInforme() {
    console.log(`${this.nombre} ha revisado un informe.`);
  }

  resolverInforme() {
    console.log(`${this.nombre} ha resuelto una consulta.`);
  }

  responderConsulta() {
    console.log(`${this.nombre} ha respondido una consulta.`);
  }
}

// Ejemplos de uso
const ciudadano1 = new Ciudadano("Juan", 30, "juan123", "clave123");
const admin1 = new Admin("Admin1", 35, "admin1", "adminpass");

ciudadano1.saludar();
ciudadano1.iniciarSesion();

admin1.saludar();
admin1.iniciarSesion();
admin1.cerrarSesion();

const main = async () => {
  await Persona();
  rl.close();
};

main();
