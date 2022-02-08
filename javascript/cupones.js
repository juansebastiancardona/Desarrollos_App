const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function Descuento(precio ,porcentajeDescuento,cupon){

    const  descuento = 100 - porcentajeDescuento; //80

 const total_descuento = (precio * descuento) / 100; //80000
 
 const valor_descuento = precio-total_descuento;

//  segunda parte de la formula



const valor_cupon = 100 - cupon; // 60

const total_cupon = (total_descuento * valor_cupon) / 100; //48000




 const resultadop = document.getElementById("ResultadoPrecio"); 

    resultadop.innerText = ` $`+ total_cupon ;

//  return  (`el total a pagar por su producto que tiene el ` + porcentajeDescuento + `% de descuento, es de $` + total_descuento + ` (valor del descuento: $`+ valor_descuento + `)`);


}

function calcularDescuento(){
    const precioProd = document.getElementById("inputPrecio");
    const descuentoProd = document.getElementById("inputDescuento");

    const cuponProd= document.getElementById("inputCupon");

    

    const precio = precioProd.value;
    const desc = descuentoProd.value;
    const cup = cuponProd.value;
    
    // let valcup;

    // switch(cup) {
    //     case coupons[0]: // "JuanDC_es_Batman"
    //     valcup = 15;
    //     break;
    //     case coupons[1]: // "pero_no_le_digas_a_nadie"
    //     valcup = 30;
    //     break;
    //     case coupons[2]: // "es_un_secreto"
    //     valcup= 25;
    //     break;
    //   }
    const precioDescuento = Descuento (precio,desc, cup);
    
    
}