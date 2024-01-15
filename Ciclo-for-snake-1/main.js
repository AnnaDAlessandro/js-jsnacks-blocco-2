/*Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro*/


let array1=[
    50,
    55,
    60,
    76,

]

let array2=[
    50,
    55,
    60,
    76,
    80,
    90,
    34,
    78

]

let arrayMinore;
if(array1.length>array2.length){
    arrayMinore=array2
}else if(array1.length<array2.length){
    arrayMinore=array1

}

function RandoNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

for(let i = 0; array1.length != array2.length; i++){

    let inserisciNumero= RandoNumber(1,100)
    arrayMinore.push(inserisciNumero)

}

console.log(array1,array2)