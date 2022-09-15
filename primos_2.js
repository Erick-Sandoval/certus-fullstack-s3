//Primero vamos a introducir el valor//
var numero = prompt("Inserta el numero a evaluar",'')
numero = parseInt(numero)
document.write("<br>" + typeof(numero)+ "<br>")

var lista = [2,3,5,7,11,13,17,19,23,29,31,37,41,43]
//Podemos insertar el detalle de solo poner numeros//
//Podemos ponerle una lista de primos y evaluarlos//
if (lista.includes(numero) ) {
   document.write("Este número es primo" + "<br>" + numero);
} else {
   document.write("No es un número primo"+ "<br>" + "Es el número " + numero)
}

