// var verifiacarDiasDelAño = "5 años";
// document.write(verifiacarDiasDelAño);

// Seleccionar la etiqueta
var titulo1 = document.querySelector("h1");

console.log(titulo1);

// Registrar el evemto al elememto
titulo1.addEventListener("click", function(){
    open("https://www.google.es/");
});

 /* Seleccionar el elemento */
 var parrafoMostrar = document.querySelector("p#mostrar");
 var divContenido = document.querySelector("#contenido");

 // Registrar el evemto al elememto
 parrafoMostrar.addEventListener("click", function(){
     var nombre = prompt("Digite su nmbre");
     divContenido.textContent = nombre;
     
     //document.write(`<p>${nombre}</p>`);
    // divContenido.style.display = "none";
    // alert("Soy una alerta");
    // console.log("Soy muy perron");
 });