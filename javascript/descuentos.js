// const precio_original =100000;
// const porcentaje_descuento =20;

// const  descuento = 100 - porcentaje_descuento;

// const valor_descuento = (precio_original * descuento) / 100;

// console.log ("debe pagar :" + valor_descuento);

// dentro de una funcion 

function Descuento(precio ,porcentajeDescuento){

    const  descuento = 100 - porcentajeDescuento;

 const total_descuento = (precio * descuento) / 100;
 
 const valor_descuento = precio-total_descuento;

 const resultadop = document.getElementById("ResultadoPrecio");

    resultadop.innerText = `el total a pagar por su producto que vale tiene el ` + porcentajeDescuento + `% de descuento, es de $` + total_descuento + ` (valor del descuento: $`+ valor_descuento + `)`;

//  return  (`el total a pagar por su producto que tiene el ` + porcentajeDescuento + `% de descuento, es de $` + total_descuento + ` (valor del descuento: $`+ valor_descuento + `)`);


}

function calcularDescuento(){
    const precioProd = document.getElementById("inputPrecio");
    const descuentoProd = document.getElementById("inputDescuento");

    const precio = precioProd.value;
    const desc = descuentoProd.value;

    const precioDescuento = Descuento (precio,desc);
    
    
}