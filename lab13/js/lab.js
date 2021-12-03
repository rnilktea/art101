/*
 * Author: Lokinah Khan
 * Created: 12.03.2021
 * License: Public Domain
 */

 function fizzBuzzBoom(factors, words, limit){
   var output = "";

   for (let i = 1; i <= limit; i++){
     var str = "";

     if (i % factors[0] == 0) {
       str += words[0];
     }
     if (i % factors[1] == 0) {
       str += words[1];
     }
     if (i % factors[2]) {
       str += words[2];
     }

     if (str == "") {
       str = i + "<br>";
     }
     else {
       str += "!<br>";
     }

     output += str;
   }
   return output;
 }

 $("output").append("<br><p id = fizzBuzzBoom></p>");
 $("#submit").click(function() {
   var limit = $("limit").val();
   var factors = [];
   var words = [];

   for (let i = 1; i < 4; i++) {
     factorId = "#f" + i;
     wordId = "#w" + i;
     factors.push($(factorId).val());
     words.push($(wordId).val());
   }

   $("#fizzbuzz").html("<pre>" + fizzBuzzBoom(factors, words, limit) + "</pre>");
   $("#fizzbuzz").css("ColumnCount", "10");
   $("#fizzbuzz").css("fontSize", "14px");
 })
