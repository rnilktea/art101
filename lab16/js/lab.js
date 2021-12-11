/*
 * Author: Lokinah Khan
 * Created: 12.09.2021
 * License: Public Domain
 */

var comicObj = $.ajax({
     // The URL for the request (from the api docs)
     url: "https://xkcd.com/info.0.json",
     // The data to send (will be converted to a query string)
     data: {
       id: 123,
       api_key: "blahblahblah",
     },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {

         console.log(data);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
})
