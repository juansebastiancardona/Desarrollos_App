const gerente = {
    nombre: "sebastian",
    edad: 18,
    cursosAprobados: ["poo", "javascript"],
    agrearCurso (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};
gerente.cursosAprobados;
Object.keys(gerente);
Object.getOwnPropertyNames(gerente);
Object.entries(gerente);

// asi se puede ingresar a  cualquier posicion del objeto 
Object.entries(gerente)[2];


// creart nuevas propiedades para nuestr elemento recibe tres parametros


Object.defineProperty