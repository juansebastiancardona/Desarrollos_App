var familia = ["sebastian ", "luisa","juan jose", "jeronimo", "celeste"]
function saludar( integrante){
    console.log(`hola ${integrante}`);

}
for (var i =0 ; i < familia.length; i++){
    saludar(familia[i]);
}

// otra forma de hacer el ciclo
var familia = ["sebastian ", "luisa","juan jose", "jeronimo", "celeste"]
function saludar( integrante){
    console.log(`hola ${integrante}`);

}
for (var integrante of familia){
    saludar(integrante);
}
