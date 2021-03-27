/* https://www.codewars.com/kata/585d7d5adb20cf33cb000235
 * 
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 */
function findUniq(arr) {
    newArr = arr.sort();

    if (((newArr[0] + newArr[1] + newArr[2]) === newArr[0] + newArr[0] + newArr[0]) || ((newArr[0] + newArr[1] + newArr[2]) === -(newArr[0] + newArr[0] + newArr[0])) || ((newArr[0] + newArr[1] + newArr[2]) === 0)) {
        
        //penultimo elemento
        if ((newArr[arr.length-1] + newArr[arr.length-3]) == newArr[arr.length-1] * 2) {
            return newArr[arr.length-2];
        }

        //ultimo elemento
        else if ((newArr[arr.length-2] + newArr[arr.length-3]) == newArr[arr.length-2] * 2) {
            return newArr[arr.length-1];
        }

        //antepenultimo elemento
        else if ((newArr[arr.length-1] + newArr[arr.length-2]) == newArr[arr.length-1] * 2) {
            return newArr[arr.length-3];
        }
    }

    //Segundo elemento
    if((newArr[0]+newArr[2]) == newArr[0]*2){
        return newArr[1];
    }

    //Primeiro elemento
    else if((newArr[1]+newArr[2]) == newArr[1]*2){
        return newArr[0];
    }

    //Terceiro elemento
    else if((newArr[0]+newArr[1]) == newArr[0]*2){
        return newArr[2];
    } 
}
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([ 1, 2, 1, 1, 1 ]));