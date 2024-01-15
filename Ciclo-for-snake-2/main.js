/*Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.*/


let cicli= 1
for(let i=0; i<cicli; i++){
    let numeroUtente= parseInt(prompt(`Inserisci un numero da 1 a 50`))

    if(numeroUtente % 2 === 0){
        document.writeln(`<p>Il numero è pari ${numeroUtente}</p>`)
    }else{
        document.writeln(`<p>Il numero è dispari ${numeroUtente}</p>`)
    }
}