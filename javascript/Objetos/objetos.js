const cliente = {

    cedula : "1054992167",
    nombre : "sebas",
    edad :20,
    

    TipoMembresia : ["basica", "premium",  "vip"],

    // metodo

    aprobado(nuevo){
        this.TipoMembresia.push(nuevo);
        

    }


};

//insertar 

cliente.TipoMembresia.push("oro");






// prototipo
function student (cedula , nombre ,edad){
    
    this.cedula = cedula;
    this.nombre = nombre;
    this.edad = edad;


    this.TipoMembresia = TipoMembresia;

// primera forma de insertar datos en el array dentro del prototipo
    // this.aprobado = function (nuevo){
    //     this.aprobado.push("oro")
    // }

}
//segunda forma de hacerlo con este metodo y la herramineta prototypoe
student.prototype.aprobado = function (nuevo){

    this.aprobado.push("oro");
}

// creamos instancia de aStudent

const juan = new Student(

    "105455",
    "JUAN",
    20,
    ["DATOS", "ALGORITMOS"]

)



