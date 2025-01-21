const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// to tob Button



   // Show the button when the user scrolls down
   window.onscroll = function () {
    var toTopBtn = document.getElementById('toTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  };

  // Smooth scroll to top when the button is clicked
  document.getElementById('toTopBtn').onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };






