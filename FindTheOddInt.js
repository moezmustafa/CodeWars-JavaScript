/* https://www.codewars.com/kata/54da5a58ea159efa38000836
 *
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */
function findOdd(array) {
    var count = 0;
    var arrayInt = [];
    for (var i = 0; i < array.length; i++) {
        if (!!Number.isInteger(array[i])) arrayInt.push(array[i]);
    }

    for (var j = 0; j < arrayInt.length; j++) {
        for (var k = 0; k < arrayInt.length; k++) {
            if (arrayInt[j] == arrayInt[k]) {
                count++;
            }
        }
        if ((count % 2) != 0) {
            return arrayInt[j];
        }
    }
    count = 0;
    console.log(arrayInt);
}

console.log(findOdd([0.5,5,5,1,1,1,3.3]));
console.log(findOdd([0.5,5,5,5,1,1,1,1,3.3]));