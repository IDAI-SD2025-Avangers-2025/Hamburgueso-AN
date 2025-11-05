var formulario = document.getElementById("calcularPrecio");

function Calcular() {

    var cantidad = document.getElementById ("Cantidad").value;

    var tamaño = formulario.tam.value;

    var pan = formulario.pan.value;

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
    

    if (pan == "Blanco")
    {
        total = total + 0;
    }
    else if (pan == "Integral")
    {
        total = total + 20;
    }
    else if(pan == "Papa")
    {
        total = total + 30;
    }
    else if(pan == "Parmesano")
    {
        total = total + 40;
    }
    

    if (formulario.Tomate.checked) 
    {
        total += 10;
    }

    if (formulario.Cebolla.checked) 
    {
        total += 10;
    }

    if (formulario.Aguacate.checked)  
    {
        total += 10;
    }

    if (formulario.Jamon.checked) 
    {
        total += 10;
    }

    if (formulario.Tocino.checked) 
    {
        total += 10;
    }

    if (formulario.QuesoAmarillo.checked) 
    {
        total += 10;
    }

    if (formulario.QuesoBlanco.checked) 
    {
        total += 10;
    }

    if (formulario.Champiñones.checked) 
    {
        total += 10;
    }

    if (formulario.Trompo.checked) 
    {
        total += 10;
    }

    if (formulario.Piña.checked) 
    {
        total += 10;
    }

    if (formulario.Combo.value == "Si")
    {
        total += 50;
    }

    formulario.Total.value = total * cantidad;
}