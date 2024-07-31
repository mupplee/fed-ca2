"use strict";
var dayEvent = new Array();

dayEvent[1] = "<br />";
dayEvent[2] = "<br />";
dayEvent[3] = "<br />";
dayEvent[4] = "<br />";
dayEvent[5] = "<br />";
dayEvent[6] = "<br />";
dayEvent[7] = "<br />";
dayEvent[8] = "<br />";
dayEvent[9] = "<br />";
dayEvent[10] ="<br />";
dayEvent[11] ="<br />";
dayEvent[12] ="<br /><a href='https://for.edu.sg/sp70charitygolf'>SP 70th Anniversary Charity Golf & Dinner</a><br />Venue: Orchid Country Club<br />Time:<br />Golf - 11am-6.30pm<br />Dinner - 7.30-10.30pm";
dayEvent[13] ="<br />";
dayEvent[14] ="<br />";
dayEvent[15] ="<br />";
dayEvent[16] ="<br />";
dayEvent[17] ="<br />";
dayEvent[18] ="<br />";
dayEvent[19] ="<br />";
dayEvent[20] ="<br />";
dayEvent[21] ="<br />";
dayEvent[22] ="<br />";
dayEvent[23] ="<br />";
dayEvent[24] ="<br />";
dayEvent[25] ="<br />";
dayEvent[26] ="<br />";
dayEvent[27] ="<br />";
dayEvent[28] ="<br />";
dayEvent[29] ="<br />";
dayEvent[30] ="<br />";
dayEvent[31] ="<br /><a href='https://www.sp.edu.sg/ccas/our-events/poly-50'>Poly50 x SP@70</a><br />Venue: Singapore Polytechnic<br />Time: 2pm";
/* Set the date displayed in the calendar */
var thisDay = new Date();

/* Write the calendar to the element with the id "calendar" */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/* Function to generate the calendar table */
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

/* Function to write the calendar caption */
function calCaption(calDate) {
   //monthName array contains the list of month names
   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// Determine the current month
var thisMonth = calDate.getMonth();

// Determine the current year
var thisYear = calDate.getFullYear();

// Write the caption
return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

/* Function to write a table row of weekday abbreviations */
function calWeekdayRow(){
   //Array of weekday abbreviations
   var dayName = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

   var rowHTML = "<tr>";
   
   // Loop through the dayName array
   for (var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calender_weekdays'>" + dayName[i] + "</th>";
   }

   rowHTML += "</tr>";
   return rowHTML;

}

// function to calculate the number of days in the month
function daysInMonth(calDate){
   //arrays in days of each month
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

   // Extract the four digit year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   //revise the days in feburuary for leap year
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
         dayCount[1] = 29
      }
   } 

   //return the number of days for the current month
   return dayCount[thisMonth];
}

// Function to write table rows for each day of the month
function calDays(calDate){
   //Determine the starting day of the month
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

   //Write blank cells preceding the starting day
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }

   //Write cells for each day of the month
   var totalDays = daysInMonth(calDate);

   var highlightDay = calDate.getDate();
   for (var i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay === 0) htmlCode += "<tr>";
      if (i === highlightDay) {
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
      } else {
         htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
      }
      if (weekDay === 6) htmlCode += "</tr>";
   }

   return htmlCode
}