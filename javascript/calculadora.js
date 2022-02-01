function perimetrocuadrado(lado){
    return lado* 4;
}
function areacuadrado (lado){

    return lado * lado;
}

//interactuando con html

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