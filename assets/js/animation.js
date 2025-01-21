const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mousemove', function(evt) {
    const movX = evt.clientX - this.getBoundingClientRect().x;
    const movY = evt.clientY - this.getBoundingClientRect().y;

    gsap.to(this.querySelector(".button__spotlight"), {
      x: movX,
      y: movY,
      scale: 30,
      duration: 0.3,
    });
  });

  button.addEventListener('mouseleave', function(evt) {
    const movX = evt.clientX - this.getBoundingClientRect().x;
    const movY = evt.clientY - this.getBoundingClientRect().y;

    gsap.to(this.querySelector(".button__spotlight"), {
      x: movX,
      y: movY,
      scale: 0,
      duration: 0.3,
    });
  });
});



// loader


