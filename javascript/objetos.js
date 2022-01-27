var negocio ={

    rut: 1054992167,
    nombre : "JSolutions",
    direccion:"carrera 12b # 7-02",
    celular: 3134080722,
    detalle : function()
    {
    console.log(`empresa ${this.nombre} ${this.celular}` );
    }
}


negocio.detalle

// fubcion constructora

function negocio3(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}
negocio3

var nuevo = new negocio3 ("toyota" , "xfre", 2205);
nuevo

