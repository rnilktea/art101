/*
 * Author: Lokinah Khan & Monique Salinas
 * Created: 11.08.2021
 * License: Public Domain
 */

 // Using jQuery, do the following for each button:
 // Add a click event to each button
 // Find the challenge, problems, or results section the button is in.
 // Toggle a class special within the <div> of the section
 // Go into your css and style each of the classes
 // Test each button

  $("#challenge").append("<button id = 'g-button'>button</button>");
  $("#problems").append("<button id = 'p-button'>button</button>");
  $("#results").append("<button id = 'c-button'>button</button>");

  $("#g-button").click(function() {
    //action here
    $(this).parent().toggleClass("special");
  });

  $("#p-button").click(function() {
    //action here
    $(this).parent().toggleClass("special");
  });

  $("#c-button").click(function() {
    //action here
    $(this).parent().toggleClass("special");
  });
