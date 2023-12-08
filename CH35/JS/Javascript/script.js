//comentarios de una sola línea
/*comentarios multilinea*/

//alert("Hola mundo");

//console.log("Este es un mensaje para mi consola")

var nombre = prompt("Ingresa tu nombre");
alert("Hola," + nombre + " Bienvenido a la CH35 ");


var numero1 = parseInt(prompt("Ingresa el primer numero:"));
var numero2 = parseInt(prompt("Ingresa el segundo numero:"));

console.log("suma:" + (numero1+numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicacion:" + (numero1 * numero2));
console.log("division:" + (numero1/numero2));


var edad = prompt("Ingresa tu edad");

if(edad<18) {
    alert("Eres mayor de 18 años, adelante");

}

if (edad>=18 && edad <65) {
    alert("Eres mayor de 18 años y lo suficientemente cool para pasar, adelante");

}

if(edad>65) {
    alert("Demasiado viejo, no puedes pasar")
}

