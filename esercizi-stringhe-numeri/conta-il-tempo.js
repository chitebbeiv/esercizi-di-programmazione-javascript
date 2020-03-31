/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

const secs = 12560;

let toMin = Math.round( secs / 60 );
let ore = Math.round( toMin / 60 );
let min = toMin - ( ore * 60 );
let sec = secs % toMin;

console.log( ore + ' ore, ' + min + ' minuti e ' + sec + ' secondi' );
