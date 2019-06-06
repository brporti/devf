var escala = document.getElementById('escala')
var grados = document.getElementById('grados')
var total = document.getElementById('total')

function calcular(){
    var gradosNumber = parseFloat(grados.value)

    if(escala.value == "celsius"){
        total.value = (gradosNumber * 1.8) + 32
    }

    else{
        total.value = (gradosNumber -32) / 1.8
    }

    console.log(escala);
    console.log(gradosNumber);
    console.log(total);


    
}