/*genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero.
 Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" 
 nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale*/

let randomNumber= RandoNumber(1,100)
let numeroUtente= 0

while(numeroUtente != randomNumber){
    numeroUtente= parseInt(prompt('Inserisci un numero casuale da 1 a 100'))
    if(numeroUtente>randomNumber){
        alert(`Il numero è troppo alto, il numero corretto era: ${randomNumber}`)
    }else if(numeroUtente<randomNumber){
        alert(`Il numero è troppo basso, il numero corretto era: ${randomNumber}`)
    }else{
        alert(`Complimenti hai indovinato il numero giusto: ${randomNumber}`)
    }
}

function RandoNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

