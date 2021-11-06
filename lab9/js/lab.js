/*
 * Author: Lokinah Khan
 * Created: 11.04.2021
 * License: Public Domain
 */

//function
window.onload = function () {

  //Use getElementById() to find your output <div> and assign it to a variable outputEl
  var outputEl = document.getElementById("output");

  //Create a new element with document.createElement("p") and assign it to a variable new1El
  var new1El = document.createElement("p");

  //Change the html attribute of new1El to say something new.
  new1El.innerHTML = "Something new.";
  new1El.id = "new-one";

  //Create another new element and assign it to a variable new2El
  var new2El = document.createElement("p");
  new1El.id = "new-two";

  //Change the html attribute of new2El to say something else.
  new2El.innerHTML = "Something else.";

  //Append both new elements one at a time using appendChild() to your output <div>
  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);

  outputEl.className = "changed";
}
