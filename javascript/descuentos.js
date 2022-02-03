// const precio_original =100000;
// const porcentaje_descuento =20;

// const  descuento = 100 - porcentaje_descuento;

// const valor_descuento = (precio_original * descuento) / 100;

// console.log ("debe pagar :" + valor_descuento);

// dentro de una funcion 

function calcularDescuento(precio ,porcentajeDescuento){

    const  descuento = 100 - porcentajeDescuento;

 const total_descuento = (precio * descuento) / 100;
 
 const valor_descuento =precio-total_descuento;

 return valor_descuento;


}