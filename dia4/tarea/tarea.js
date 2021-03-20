let vocales = ["a","e","i","o","u"];
let titulo = document.querySelector("h1");

for(let i = 0; i<vocales.length; i++){
    setTimeout(()=>{
         titulo.textContent += vocales[i] + " ";
    }, 1500*i)  
}

let num1 = 0
let num2 = 1
let total = 0
let num3 = 0
let i=0

while (num1+num2 < 4000000) { 
    num3= num1 + num2
    num1 = num2;
    num2= num3
  if (num3 % 2 === 0) {    
    total+=num3;
  }
  i++
}console.log(total);
