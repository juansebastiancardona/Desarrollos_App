// const precio_original =100000;
// const porcentaje_descuento =20;

// const  descuento = 100 - porcentaje_descuento;

// const valor_descuento = (precio_original * descuento) / 100;

// console.log ("debe pagar :" + valor_descuento);

// dentro de una funcion 

function Descuento(precio ,porcentajeDescuento,cupon){

    const  descuento = 100 - porcentajeDescuento; //80

 const total_descuento = (precio * descuento) / 100; //80000
 
 const valor_descuento = precio-total_descuento;

// //  segunda parte de la formula

// const valor_cupon = descuento - cupon;

// const total_cupon = (total_descuento * valor_cupon) / 100;





 const resultadop = document.getElementById("ResultadoPrecio");

    resultadop.innerText = ` $`+ valor_descuento ;

//  return  (`el total a pagar por su producto que tiene el ` + porcentajeDescuento + `% de descuento, es de $` + total_descuento + ` (valor del descuento: $`+ valor_descuento + `)`);


}

function calcularDescuento(){
    const precioProd = document.getElementById("inputPrecio");
    const descuentoProd = document.getElementById("inputDescuento");

    const cuponProd= document.getElementById("inputCupon");

    const precio = precioProd.value;
    const desc = descuentoProd.value;
    const cup = cuponProd.value;

    const precioDescuento = Descuento (precio,desc);
    
    
}