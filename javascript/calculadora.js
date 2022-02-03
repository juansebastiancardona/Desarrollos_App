function perimetrotriangulo(lado1, lado2, base){

    const peri = lado1 + lado2 + base;
    return peri;
}

function areatriangulo(base , altura){
    return (base * altura) / 2;

}

// cuadrado
function perimetrocuadrado(lado){
    return lado* 4;
}
function areacuadrado (lado){

    return lado * lado;
}

// circulo
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


//interactuando con html

function calcularperitriangulo(){
    const ladotri1 = document.getElementById("inputrilado1");
    const ladotri2 = document.getElementById("inputrilado2");
    const basetri = document.getElementById("inputribase");
    const altutatri = document.getElementById("inputrialtura");

    const lad1 = ladotri1.value;
    const lad2 = ladotri2.value;
    const bas = basetri.value;
    // const alt = altutatri.value;

    const peritriangulo = perimetrotriangulo(lad1, lad2, bas);

    alert(peritriangulo);
}

function calcularareatriangulo(){
    const basetri = document.getElementById("inputribase");
    const altutatri = document.getElementById("inputrialtura");
    const bas = basetri.value;
    const alt = altutatri.value;
    const areatri = areatriangulo(bas , alt );
    alert(areatri);

}
// cuadrado
function calcularperimetrocuadrado(){
    const ladocuadrado = document.getElementById("inputcuadrado");
    const value = ladocuadrado.value;
    const perimetro = perimetrocuadrado(value);

    alert(perimetro);

}

function calcularareacuadrado(){
    const ladocuadrado = document.getElementById("inputcuadrado");
    const value = ladocuadrado.value;
    const area = areacuadrado(value);
    alert(area);
}

// circulo

function calcularperimetrocirculo(){
    const radio = document.getElementById("inputradio");
    const rad = radio.value;

    const pericir = pericirculo(rad);
    alert(pericir);  
}

function  calcularareacirculo(){
    const radio = document.getElementById("inputradio");
    const rad = radio.value;

    const areacir = areacirculo (rad)
    alert(areacir);
}

