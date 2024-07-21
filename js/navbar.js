window.addEventListener('scroll', function() {
    var targetDiv = document.getElementById('navbarkeep');//target navbarkeep id in html
    if (window.scrollY > 165) { //check pixels scrolled
      targetDiv.classList.add('fix');
    } else {
      targetDiv.classList.remove('fix');
    }
  });
  