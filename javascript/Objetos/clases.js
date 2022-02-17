 class student2 {

    constructor(nombre, edad, cursosAprobados){
        this.nombre = nombre;
        this.edad = edad;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso (nuevo){
        this.cursosAprobados.push(nuevo)
    }
}

const juan = new student2(

    "juan",
    25,
    [
        "curso practico de javascript con el loco",
    ],
);
