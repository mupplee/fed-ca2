window.addEventListener('scroll', function() {
    var targetDiv = document.getElementById('navbarkeep');//target navbarkeep id in html
    if (window.scrollY > 100) { //check pixels scrolled
      targetDiv.classList.add('fix');
    } else {
      targetDiv.classList.remove('fix');
    }
  });

window.addEventListener("scroll", function () {
  var targetDiv = document.getElementById('scrollbar');
  var windowHeight = window.innerHeight; //height of window
  var docHeight = document.documentElement.scrollHeight; //height of paage
  var scrollTop = window.scrollY;  //scroll position
  var percentage = (scrollTop / (docHeight - windowHeight)) * 100; // calculate the percentage
  var roundedPercentage = Math.min(100, Math.max(0, Math.round(percentage)));// round off the percentage
  targetDiv.style.width = roundedPercentage + "%"; // style the progress bar
  targetDiv.innerText = Math.round(roundedPercentage) + "%"; // update the text in the progress bar
});