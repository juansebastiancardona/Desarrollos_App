console.group("cuadrado");
const lado = 5;

console.log("el lado del cuadrado es " + lado + "cm");

const perimetro = lado + lado + lado +lado;


console.log("el perimetro del cuadrado es " + perimetro);
 const area= lado * lado;

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





