var formulario = document.getElementById("calcularPrecio");

function Calcular() {
    event.preventDefault();

    var cantidad = document.getElementById ("Cantidad").value;

    var tamaño = formulario.tam.value;
    alert(tamaño);

    var total = 0;

    if (tamaño == "chico") {
        total = 100; 
    }
    else if (tamaño == "mediano") {
        total = 150;
    }
    else if (tamaño == "grande") {
        total = 200;
    }

    formulario.Total.value = total * cantidad;
}