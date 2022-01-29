console.group("cuadrado");
const lado = 5;

console.log("el lado del cuadrado es " + lado + "cm");

const perimetro = lado * 4;


console.log("el perimetro del cuadrado es " + perimetro);
 const area= lado * lado;

<<<<<<< HEAD
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
 
=======
 console.log("el area del cuadrado es " + area+"cm");

console.groupEnd();

console.group("triangulo");
//  triangulo
const lado1 = 6;
const lado2 = 6;
const base = 12;
const altura = 5.5 ;

const perimetrotri = lado1+lado2 +base;
const areatri = (base * altura)  / 2 ;


console.log("lado1 y lado2 :" + lado1 + "," + lado2 + " "+ "y " + "la base: " + base);
console.log("altura :" + altura );
console.log("perimetro triangulo :" + perimetrotri );
console.log("area triangulo :" + areatri );
console.groupEnd();





>>>>>>> bb5e32f737529700798107bb375637f273e2c1da
