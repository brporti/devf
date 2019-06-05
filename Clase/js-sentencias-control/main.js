
// var edad = prompt('Cuantos años tienes?')
// var legal = 18

// if(edad > legal){
//     alert('Avanzar');
// }else{
//     alert('Detener');
// }

//Operadores lógicos 
//AND
// console.log('palabra' == 'palabra' && 'adios' == 'adios'); //true
// console.log('palabra1' == 'palabra' && 'adios' == 'adios'); //false
// console.log('palabra' == 'palabra1' && 'adios' == 'adios'); //false
// console.log('palabra' == 'palabra' && 'adios1' == 'adios'); //false
// console.log('palabra' == 'palabra' && 'adios' == 'adios1'); //false

//OR
// console.log('palabra' == 'palabra' || 'adios' == 'adios'); //true
// console.log('palabra1' == 'palabra' || 'adios' == 'adios'); //true
// console.log('palabra' == 'palabra1' || 'adios' == 'adios'); //true
// console.log('palabra' == 'palabra' || 'adios1' == 'adios'); //true
// console.log('palabra' == 'palabra' || 'adios' == 'adios1'); //true
// console.log('palabra1' == 'palabra' || 'adios' == 'adios1'); //false

// var username = prompt('Escribe tu username')
// var password = prompt('Escribe tu contraseña')

// if(username == 'bryan' && password == 'contra'){
//     alert('Adelante')
// } else{
//     alert('Contraseña o usuario incorrecto')
// }

//Hacer el juego piedra papel o tijera
var j1 = prompt('Jugador 1: Elige piedra, papel o tijera')
var j2 = prompt('Jugador 2: Elige piedra, papel o tijera')

if(j1 == 'piedra' && j2 == 'piedra' || j1 == 'papel' && j2 == 'papel' || j1 == 'tijera' && j2 == 'tijera'){
    alert('Empate')

}else if(j1 == 'piedra' && j2 == 'papel' || j1 == 'papel' && j2 == 'tijera' || j1 == 'tijera' && j2 == 'piedra'){
    alert('Jugador 2 gana!')

}else{
    alert('Jugador 1 gana!')
}
