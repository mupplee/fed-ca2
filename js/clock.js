"use strict";
/* Execute the function to run and display the countdown clock*/
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock*/
function runClock(){
    // Display the current date and time
    var currentDay = new Date();
    
    // Set the target date
    var targetDate = new Date("October 27, 2034");
    
    // Calculate the time difference
    var timeDiff = targetDate - currentDay;
    
    // Calculate years, days, hours, minutes, and seconds
    var yearsLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    var daysLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hrsLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minsLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var secsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById("years").textContent =  Math.floor(yearsLeft);
    document.getElementById("days").textContent =  Math.floor(daysLeft);
    document.getElementById("hrs").textContent =  Math.floor(hrsLeft);
    document.getElementById("mins").textContent =  Math.floor(minsLeft);
    document.getElementById("secs").textContent =  Math.floor(secsLeft);
}