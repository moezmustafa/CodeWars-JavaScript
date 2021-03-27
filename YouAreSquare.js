/* https://www.codewars.com/kata/youre-a-square/train/javascript
 * 
 * A square of squares You like building blocks. 
 * You especially like building blocks that are squares. And what you even like more, 
 * is to arrange them into a square of square building blocks! However, sometimes, 
 * you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
 * Those blasted things! If you just had a way to know, whether you're currently working in vain… 
 * Wait! That's it! You just have to check if your number of building blocks is a perfect square.
 */

var isSquare = n => Number.isInteger(Math.sqrt(n)); //Lembrando que Arrow function possui o retorno implícito para funções de uma única linha.

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(36));
console.log(isSquare(26));