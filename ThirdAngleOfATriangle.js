/* https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript
 * 
 * You are given two angles (in degrees) of a triangle. 
 * Write a function to return the 3rd. 
 * Note: only positive integers will be tested.
 */

function otherAngle(a, b) {
    let arrayAuxiliar = [];
    let contadorAuxiliar = 0;

    arrayAuxiliar.push(a);
    arrayAuxiliar.push(b);
    
    arrayAuxiliar.map(function(value){
        contadorAuxiliar += value
        return contadorAuxiliar;
    });

    return (180 - contadorAuxiliar);
}

console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
console.log(otherAngle(43, 78));
console.log(otherAngle(10, 20));