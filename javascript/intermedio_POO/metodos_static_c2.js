const objeto1  = {

    nombre: "sebas",
    edad: 30,
    email: "juans@gmail.com"
}

// esto me muestra una lista de los items clave

Object.keys(objeto1);

const objeto2  = {

    nombre: "sebas",
    edad: 30,
    email: "juans@gmail.com"
}

// esto me muestra una lista de los items clave lo mismo q

Object.getOwnPropertyNames(objeto2);

// este devuelve arrays de arrays ENTRIES
const objeto3  = {

    nombre: "sebas",
    edad: 30,
    email: "juans@gmail.com"
}

// esto me muestra una lista de los items clave lo mismo q

Object.entries(objeto3);
Object.getOwnPropertyDescriptors

// EL MAS IMPORTANTE ES  Object.getOwnPropertyDescriptors NOS DEVUELVE UN OBJETO