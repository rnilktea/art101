/*
 * Author: Lokinah Khan
 * Created: 10.26.2021
 * License: Public Domain
 */

 function cubed(x) {
     var results = x**3;
     return results;
 };

 //test function
 console.log("What is 3 cubed?: " , cubed(3));
 console.log("What is 9 cubed?: " , cubed(9));

array = [2 , 4 , 6 , 8];
console.log("My array: ", array);
document.writeln("My array: ", array , "<br>");

var result = array.map(cubed);
//should be 8, 64, 216, 512
console.log("The array cubed: " , result);
document.writeln("The array cubed: " , result, "<br>");

var result = array.map(function(x) {
    var results = x * 2.5;
    return results;
})

console.log("Array multiplied by 2.5: " , result);
document.writeln("Array multiplied by 2.5: " , result );
