//programa agenda que pida dos datos de cada persona y depues las ordene por nombre apellido o devuelva contacto
class Contacto {
    constructor(nombre, apellido, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = parseInt(telefono);
    }
    getNombre() {
        return this.nombre[0].toUpperCase() + this.nombre.substring(1);
    }
    getApellido() {
        return this.apellido[0].toUpperCase() + this.apellido.substring(1);
    }
}


const arrayContactos = [];


function mostrarContactoPantalla(opcion, filtro) {

    let auxArrayFiltrado = [];
    auxArrayFiltrado = arrayContactos.slice();
    console.log("cantidad de objetos " + arrayContactos.length);

    if (opcion == 1) { //1-Contactos ordenados por Nombre
        auxArrayFiltrado.sort(function (a, b) {
            var nombreA = a.nombre.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
            var nombreB = b.nombre.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
            if (nombreA < nombreB) {
                return -1;
            }
            if (nombreA > nombreB) {
                return 1;
            }
            // Los nombres son iguales
            return 0;
        });

    } else if (opcion == 2) { //2-Contactos ordenados por Apellido
        auxArrayFiltrado.sort(function (a, b) {
            var apellidoA = a.apellido.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
            var apellidoB = b.apellido.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
            if (apellidoA < apellidoB) {
                return -1;
            }
            if (apellidoA > apellidoB) {
                return 1;
            }
            // Los nombres son iguales
            return 0;
        });
    } else if (opcion == 3) { //3-Contactos filtrados por Nombre o Apellido
        //filtrar array por nombre o apellido ingresado
        console.log("cantidad de objetos auxArrayFiltrado" + auxArrayFiltrado.length);
        auxArrayFiltrado = auxArrayFiltrado.filter(c => c.nombre.includes(filtro));
    }

    for (let c of auxArrayFiltrado) {
        document.write("<p>Nombre " + c.getNombre() + "</p>");
        document.write("<p>Apellido " + c.getApellido() + "</p>");
        document.write("<p>Telefono " + c.telefono + "</p>");
        document.write("<hr><br/>");
    }
}

alert("Bienvenido! es hora de llenar tu agenda de contactos.\nEscriba 'SALIR' para terminar.")

let palabraIngresada = prompt("Ingrese nombre o SALIR para terminar:");
do {
    if (palabraIngresada.toLowerCase() != "salir") {
        let _nombre = palabraIngresada;
        let _apellido = prompt("Ingrese el apellido:");
        let _telefono = prompt("Ingrese el teléfono:");
        if (isNaN(_telefono)) {
            alert("Debe ingresar núumero solamente. \nVuelva a empezar.")
        } else {
            let nuevo = new Contacto(_nombre, _apellido, _telefono)
            arrayContactos.push(nuevo);
            console.log(nuevo);
            alert("Contactos ingresados: " + arrayContactos.length);
        }
    }
    palabraIngresada = prompt("Ingrese nombre:");
}
while (palabraIngresada.toLowerCase() != "salir");

let opcion = prompt("Ingresar número de opción que desea mostrar" +
    "\n1-Contactos ordenados por Nombre" +
    "\n2-Contactos ordenados por Apellido" +
    "\n3-Contactos filtrados por Nombre o Apellido");

let filtro = "";
if (opcion == 3) {
    filtro = prompt("Ingrese Nombre o Apellido a buscar");
}
mostrarContactoPantalla(opcion, filtro);


