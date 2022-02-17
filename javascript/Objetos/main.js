// ventajas y desventajas de objetos literales vs poo

// es rapidom trabajar con objetos literales pero no es escalable

class Student {
    constructor (
        {
            nombre,
            email, 
            usuario,
            twitter = undefined , 
            instagram = undefined,
            cursosAprobados = [],
            rutaAprendizajes = [],
            

        }
    ){
            this.nombre = nombre;
            this.email = email;
            this.usuario = usuario;
            this.socialMedia = {
               twitter,
               instagram
            }

            this.cursosAprobados  = cursosAprobados;

            this.rutaAprendizajes  = rutaAprendizajes ;
    }
}

const juan2 = new Student({
    nombre: "luis",
    usuario: "jsg",
    email: "ju@gmail.com",
    twitter: "fy",
});
