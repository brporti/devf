var primeraFecha = prompt('¿En qué año estamos?')
var segundaFecha = prompt('Escriba un año cualquiera')

var primeraFechaNumber = parseInt(primeraFecha)
var segundaFechaNumber = parseInt(segundaFecha)

var faltan = segundaFechaNumber-primeraFechaNumber
var pasan = primeraFechaNumber-segundaFechaNumber

if(primeraFecha < segundaFecha){
    alert('Faltan ' + faltan + ' años para ' + segundaFecha)

}else if(primeraFecha > segundaFecha ){
    alert('Han pasado ' + pasan + ' años desde ' + primeraFecha)

}else {
    alert('Son el mismo año!')
}

   

