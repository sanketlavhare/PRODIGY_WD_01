// JavaScript for adding/removing scrolled class on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
  });
  
  // JavaScript for adding active class to current navigation link based on scroll position
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('#navbar ul li a');
  
  window.addEventListener('scroll', function() {
    var current = '';
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
  