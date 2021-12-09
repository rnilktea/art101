/*
 * Author: Lokinah Khan
 * Created: 12.03.2021
 * License: Public Domain
 */

outputEL = document.getElementById("output");

 //create a FizzBuzz function
function fizzBuzz() {
  //loop through number 1 to 200, listing them as you go
  var result = "";
  for (let i = 1; i <= 200; i++) {
    var str = "";

    //if number is multiple of 3, it should print "Fizz"
    if (i % 3 == 0) {
      str += "Fizz";
    }

    //if number is multiple of 5, it should print "Buzz"
    if (i % 5 == 0) {
      str += "Buzz";
    }

    //if number is multople of 7, it should print "Boom"
    if (i % 7 == 0) {
      str += "Boom";
    }

    if (str == "") {
      str += i + "<br>";
    }
    else {
      str += "!<br>";
    }
    result += str;
  }
  return result;
}

$(outputEL).html(fizzBuzz());
