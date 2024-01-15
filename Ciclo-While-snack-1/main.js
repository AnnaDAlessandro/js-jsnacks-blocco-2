/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
 Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50*/


 let arrayNumero=[];
 let somma=0;
 let i=0;

 while(somma<50){
    let numero= parseInt(prompt("Inserisci un numero minore di 50"))
    if(numero>(50-somma)){
        alert(`Puoi ancora inserire un massimo di ${50-somma}`)
    }else{
        arrayNumero.push(numero)
        somma+= arrayNumero [i]
        i++
    }
 }
 console.log(`la somma è:${somma}`, arrayNumero)


