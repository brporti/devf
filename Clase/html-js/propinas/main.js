var total = document.getElementById('total')
var personas = document.getElementById('personas')
var resultado = document.getElementById('resultado')
var porcentaje = document.getElementById('porcentaje')




function calcular (){
    var totalNumero = parseInt(total.value)
    var porcentajeNumero = parseFloat(porcentaje.value)
    var personasNumero = parseInt(personas.value)

    console.log(totalNumero);
    console.log(porcentajeNumero);
    console.log(personasNumero);

    resultado.innerHTML = (totalNumero * porcentajeNumero) / personasNumero
}