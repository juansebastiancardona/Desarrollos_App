var teclados = [

    { modelo: "kb-101"  , valor: 32000 , garantia: 3 },
    { modelo: "kb-102"  , valor: 18000 , garantia: 0 },
    { modelo: "kb-105"  , valor: 32000 , garantia: 2 },
    { modelo: "kb-103"  , valor: 38000 , garantia: 2 },
    { modelo: "kb-105"  , valor: 31000 , garantia: 1 },
    { modelo: "kb-102"  , valor: 38000 , garantia: 3 }


];

// METODO FILTRAR 

var filtrar = teclados.filter(function(teclado){
    return teclado.garantia ==3 && teclado.valor ==32000
});

filtrar

// METODO DE MAP AYUDA A MAPEAR O MOSTRAR SOLO EL VALOR DEL DATO DEL ARRAY
var mapa = teclados.map(function(teclado){
    return teclado.garantia
});

mapa

//METODO FIND AYUDA A AVILDAR SI UN ELEMENTO EXISTE DENTRO DEL ARREFG
var validar = teclados.find(function(teclado){
    return teclado.modelo === "kb-105"
});

validar

// METODO forEach regresa datos del array mostrando solo lo que le deciomos ""
// modelo
var validado2 = teclados.forEach(function(teclado){
    console.log(teclado.modelo)
});

 validado2

//  METODO SOME: REGRESA VERDADER O FALSO DEPENDIENDFO DE LA VALIDACION SI HAY TECLADOS DE TAL FORMA

var baratos = teclados.some(function(teclado){
    return teclado.valor <32000
});

baratos

//ELIMINAR DATOS DE UN ARRAY PUSH:AGRGAR AL FINAL  POP:ELIMINA EL ULTIMO ELEMENTO SHIFT:ELIMINA EL PRIMERO


