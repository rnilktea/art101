/*
 * Author: Lokinah Khan & Sophia Syed
 * Created: 10.25.2021
 * License: Public Domain
 */

//a function that takes user input and sorts the letters
function sortUserName() {

  var userName = window.prompt("What is your name?: ");
  userName.toLowerCase();
  console.log("userName =" , userName);

  //split string to Array
  var nameArray = userName.split('');

  //sort the Array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =" , nameArraySort);

  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =" , nameSorted);

  return nameSorted;
}

  //Output
  document.writeln("Here is your new name: " , sortUserName() , "</br>");
