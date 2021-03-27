/**  https://www.codewars.com/kata/sum-of-odd-numbers/train/javascript
 */

function rowSumOddNumbers(n) {
    let temp = n;
    let arrayImpares = [];
    let count = 0;
    let countFinal = 0;

    while(n>=1){
        count += n;
        n--;
    }

    for(let i = 1; arrayImpares.length<count; i++){
        if((i%2)!==0){
            arrayImpares.push(i);
        }
    }

    for(let j = arrayImpares.length-1; temp>0; temp--){
        countFinal += arrayImpares[j];
        j--;
    }
    
    return countFinal;
}
console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(6));
console.log(rowSumOddNumbers(42));