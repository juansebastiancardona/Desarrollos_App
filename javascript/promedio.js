const sueldos = [
  400,500,200,400,500
]

let sumasueldos = 0;

for (let i = 0 ;i < sueldos.length ; i++){
 sumasueldos = sumasueldos + sueldos[i];

}

const promediosueldos = sumasueldos / sueldos.length;

function calcularMedia(listasueldos){
 let sumasueldos = 0;

for (let i = 0 ;i < listasueldos.length ; i++){ 
 sumasueldos = sumasueldos + listasueldos[i];

}

// REEMPLAZANDO EL CICLO FOR PARA ITERAR EN EL ARRAY

const promediosueldos = sumasueldos / listasueldos.length;

return promediosueldos;
}