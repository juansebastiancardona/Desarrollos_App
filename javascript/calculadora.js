// triangulo

function perimetrotriangulo(lado1, lado2, base){
    return (lado1 * lado2);
}


// cuadrado
function perimetrocuadrado(lado){
    return lado* 4;
}
function areacuadrado (lado){

    return lado * lado;
}

//interactuando con html
function calcularperitriangulo(){
    const ladotri1 = document.getElementById("inputrilado1");
    const ladotri2 = document.getElementById("inputrilado2");
    const basetri = document.getElementById("inputribase");
    const alturatri= document.getElementById("inputrialtura");

    const lad1 = ladotri1.value;
    const lad2 = ladotri2.value;
    const bas  = basetri.value;
    const alt  = alturatri.value;

    const peritriangulo = perimetrotriangulo(lad1 , lad2 , bas);
    alert(peritriangulo);


}

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

