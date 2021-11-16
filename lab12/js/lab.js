/*
 * Author: Lokinah Khan & Jonathan Graber
 * Created: 11.09.2021
 * License: Public Domain
 */

//takes user name and divides length of name by 4 then returns results based on remainder
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor, Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colours are scarlet and gold.";
  }
  else if (mod == 1) {
    return "Hufflepuff, Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and yellow and black are its colours.";
  }
  else if (mod == 2) {
    return "Slytherin, Slytherin values ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent,[3] and its colours are emerald green and silver.";
  }
  else {
    return "Ravenclaw, Ravenclaw values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal is the eagle, and its colours are blue and bronze.";
  }
}

var mybutton = document.getElementById("button");
mybutton.addEventListener("click" , function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has placed you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
