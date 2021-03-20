/*let mi_nombre=prompt("adivina mi nombre");

do {
    mi_nombre=prompt("sigue intentando")
}while(mi_nombre!=="edu") 
alert("adivinaste mi nombre")  */

//Funcion recursiva

function adivinaMyNombre(nombre) {
    mi_nombre=prompt("adivina mi nombre")
    if(mi_nombre===nombre){
        alert("hey adivinaste mi nombre");
        return;
    }
    adivinaMyNombre(nombre);
}
adivinaMyNombre("edu");