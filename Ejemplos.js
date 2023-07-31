"use strict";

//
function primero() {
    document.getElementById ("Pasemos unas horas en unos segundos");
    var horas = parseInt(document.getElementById("horas").value);
    var segundos_hora = 3600;
    var proceso = ((horas * segundos_hora) / 1);
    document.getElementById ("resultado1").innerText = + horas + " Horas equivalen a: " + proceso.toLocaleString() + " segundos";
}


function segundo() {

    var notas1 = parseFloat(document.getElementById("notas1").value);
    var notas2 = parseFloat(document.getElementById("notas2").value);
    var notas3 = parseFloat(document.getElementById("notas3").value);
    var notas4 = parseFloat(document.getElementById("notas4").value);
    var notas5 = parseFloat(document.getElementById("notas5").value);
    var notas6 = parseFloat(document.getElementById("notas6").value);
    var notas7 = parseFloat(document.getElementById("notas7").value);
    var notas8 = parseFloat(document.getElementById("notas8").value);
    var notas9 = parseFloat(document.getElementById("notas9").value);
    var notas10 = parseFloat(document.getElementById("notas10").value);
    var coleccion = (notas1 + notas2 + notas3 + notas4 + notas5 + notas6 + notas7 + notas8 + notas9 + notas10) / 10;
document.getElementById ("resultado2").innerText = "el promedio de la nota de los 10 estudiantes es de: " + coleccion;
}


function tercero() {
    let alturamax = parseFloat(document.getElementById("alturamax").value);
    let nombremax = document.getElementById("nombremax").value;
    let alturamin = parseFloat(document.getElementById("alturamin").value);
    let nombremin = document.getElementById("nombremin").value;
    let proceso3 = alturamax - alturamin;
    document.getElementById ("resultado3").innerText = " la altura de " + nombremax + "es de: " + alturamax + " la altura de " + nombremin + " es de :" + nombremin;
    document.getElementById ("resultado4").innerText = " dando un total de diferencia de altura de: " + proceso3;
}


function cuarto() {
    let personas = [];
    let Edad_per;  
        for (var n = 0; n < 40; n++) {
            Edad_per = Math.floor(Math.random() * (99 - 12 + 1) + 12);
            personas.push(Edad_per);
    var miniedad = Math.min(...personas);
    var maxiedad = Math.max(...personas);
    document.getElementById("resultado5").innerText = " el total de edades de las personas en el cumpleaños son: " + personas.join(", ");
    document.getElementById("resultado6").innerText = " la persona con maxima edad es de: " + maxiedad;
    document.getElementById("resultado7").innerText = " la persona con minima edad es de: " + miniedad;
}
}

document.getElementById("btnPrimero").addEventListener("click", primero);
document.getElementById("btnSegundo").addEventListener("click", segundo);
document.getElementById("btnTercero").addEventListener("click", tercero);
document.getElementById("btnCuarto").addEventListener("click", cuarto);