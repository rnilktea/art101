/*
 * Author: Lokinah Khan
 * Created: 12.08.2021
 * License: Public Domain
 */

 function randomQuote() {
   $.ajax({
     // The URL for the request (from the api docs)
     url: "https://api.quotable.io/random",
     // Whether this is a POST or GET request
     type: "GET",
     dataType: "json",
     // What do we do when the api call is successful
     //all the action goes in here
   })
   .done(function(data) {
     var author = data.author;
     var quote = data.content;
     console.log(data);
     $("#quote").html("<h4>"+quote+"</h4><br>- "+author);
   })
   .fail(function(request, error) {
     console.log(request, error);
   })
 }

 // when button is clicked, calls randomQuote()
 $("#activate").click(randomQuote);
