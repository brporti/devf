var saludos = document.getElementById('saludos')

function holaYAdios(){
    
    if (saludos.innerHTML == "Hola"){
        saludos.innerHTML = "Adios"

    }else{
        saludos.innerHTML = "Hola"
        
    }

}

var inputNumber = document.getElementById('inputNumber')
var multiploDiez = document.getElementById('multiploDiez')

function multiplicar(){
    var numeroMultiplicar = parseInt(inputNumber.value) 
    multiploDiez.innerHTML = numeroMultiplicar * 10
}