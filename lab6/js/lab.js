/*
 * Author: Lokinah Khan
 * Created: 10.20.2021
 * License: Public Domain
 */

 //variables
 myTransport = ["bus" , "bicycle" , "car"];
 myMainRide = {make: "Subaru" , model: "Impreza" , color: "Silver" , age: "14"};

 //results
 document.writeln("Types of ways I get around: " + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
