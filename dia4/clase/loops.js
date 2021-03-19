
var counter=0;
for ( let i=2; i<=300; i++) {          
    if(i%2===0) {                      
        console.log(i);  
        counter++;                     
    }           
}
console.log(` hay ${counter} numeros pares`);


var divisibles=0;
for( let j=3; j<=1000; j++){
    if(j%3===0 && j%5===0 && j%7===0) {
        console.log(j+" es divisble de 3 5 y 7");
        divisibles++;
    }
}
console.log(`hay ${divisibles} numeros divisbles de 2 5 y 7 en los 1000 primeros numeros`);

let suma=0;
for (let i =0;i<1000;i++){
    if(i%3===0 || i%5===0){
        suma=suma+i; 
    }    
}
console.log(`la suma de los multiplo de  3 y 5 entre 0 y 1000 es ${suma}`);

let total=0;
let i=0;
while(i<1000){
    if (i%3===0 || i%5===0){    
    total=total+i;
    }
    i++;
}
console.log(total);