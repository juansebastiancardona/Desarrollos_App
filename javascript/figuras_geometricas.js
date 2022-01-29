const lado = 5;

console.log("el lado del cuadrado es " + lado);

const perimetro = lado * 4;


console.log("el perimetro del cuadrado es " + perimetro);
 const area= lado * lado;

 console.log("el area del cuadrado es " + area);

//  ENCAPSULANDO EL CODIGO EN FUNCIONES 

function pericuadrado (lado){

    return lado *4 ;
}

function areacuadrado (lado){

    return lado * lado;
}
//circulo
function diametrocirculo(radio){
    return radio * 2;
}

const PI = Math.PI;


function pericirculo(radio){
    const diamtetro = diametrocirculo(radio); 
    return diamtetro * PI;
}
function areacirculo(radio){
    
    return (radio * radio )* PI;
}
 
