//Primero vamos a introducir el valor//
var numero = prompt("Inserta el numero a evaluar :",'')
numero = parseInt(numero)
//document.write("<br>" + typeof(numero)+ "<br>")//

let count;

count = numero - 1

// EL DIVISOR ES COUNT //
// Un número primo solo es divisible por el 1 //


while(numero % count != 0){
    //document.write("Este numero no es divisible entre " + count + "<br>");//
    count = count -1;
}
if (count == 1){
    document.write("ESTE NÚMERO ES PRIMO");
} else {
    document.write("ESTE NÚMERO NO ES PRIMO Y ES DIVISIBLE POR " + count);
}

/*
if (numero % count != 0) {
    while (count > 1){

        count = count - 1;
    }
    document.write("Este numero no es primo")
} else {
    document.write("Este numero es primo")
}
*/
