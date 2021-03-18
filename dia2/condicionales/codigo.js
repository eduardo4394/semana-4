let cancion_favorita="hola";

if (cancion_favorita==="georgia in my mind") {
    console.log("Chevere");
}else {
    console.log("no me gusta tu canción");
}


//Funcion
function ImprimeMiNombre(nombre){
    let miNombre= nombre;
    if(miNombre !== "" & miNombre !== undefined) {   
       return `mi nombre es ${miNombre}`
     }
     else {
         return `nombre no valido`;
     }   
}
console.log(ImprimeMiNombre("eduardo"));

console.log(ImprimeMiNombre("jorge"));

console.log("");


//funcion clima

function climaEvalauacion(clima) {
    if(clima== "lluvioso") {
        return`Lleva paraguas el dia estara ${clima}`;
    }
    else if(clima=="nublado"){
        return`Lleva chompa el dia estara ${clima}`;
    }
    else if(clima==="soleado"){
        return`Usa bloqueador el dia estara ${clima}`;
    }else if(clima===undefined|| clima==="") {
        return`${clima} no valido`;
    }
}


console.log(climaEvalauacion("lluvioso"));


console.log(climaEvalauacion("soleado"));


console.log(climaEvalauacion("nublado"));