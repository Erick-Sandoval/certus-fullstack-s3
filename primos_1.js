//Primero vamos a introducir el valor//
var numero = prompt("Inserta el numero a evaluar",'')

document.write(typeof(numero))

numero = parseInt(numero)

document.write("<br>" + typeof(numero)+ "<br>")

//Podemos insertar el detalle de solo poner numeros//
//Podemos ponerle una lista de primos y evaluarlos//
if (numero == 5 ) {
   document.write("Este es el número 5" + "<br>" + numero + "<br>" + "Este número es primo");
} else {
   document.write("No es el número 5"+ "<br>" + "Es el número " + numero)
}
let count = 0
while (count <3) {
    document.write("Hola Ma")
    count = count + 1 
}