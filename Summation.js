/** https://www.codewars.com/kata/grasshopper-summation/train/javascript
 * 
 * Write a program that finds the summation of every number from 1 to num. 
 * The number will always be a positive integer greater than 0.
 * summation(2) -> 3  //1 + 2 
 * summation(8) -> 36 //1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */
var summation = function (num) {
    let auxArray = [];
    let tempNum = num;
    let constNum = 0;

    for(let i = 1; i <= num; i++){
        auxArray.push(i);
    }
    auxArray.map(function(value){
        constNum += value;
    });
    return constNum;
}
console.log(summation(1));
console.log(summation(8));