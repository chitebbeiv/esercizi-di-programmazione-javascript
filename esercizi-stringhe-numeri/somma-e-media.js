/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

  http://www.imparareaprogrammare.it
*/

const numbers = [ 24, 12, 36, 78, 92 ];

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log( 'somma = ' + sum + ', media = ' + Math.round(sum / numbers.length) );
