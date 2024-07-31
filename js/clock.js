"use strict";
/* Execute the function to run and display the countdown clock*/
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock*/
function runClock(){
    // Display the current date and time
    var currentDay = new Date();
    
    // Set the target date
    var targetDate = new Date("July 12, 2025");
    
    // Calculate the time difference
    var timeDiff = targetDate - currentDay;
    
    // Calculate years, days, hours, minutes, and seconds
    var yearsLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    var daysLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hrsLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minsLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var secsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById("timer").innerHTML = yearsLeft + "yr " + daysLeft + "d " + hrsLeft + "h "
  + minsLeft + "m " + secsLeft + "s ";
}