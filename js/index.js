
  (() => {
    'use strict';
    const form = document.querySelector('#formContato');
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  })();

  // const carouselContent = document.querySelector('.carousel-content');
  //   const messages = document.querySelectorAll('.message');
  //   const prevButton = document.getElementById('prev');
  //   const nextButton = document.getElementById('next');

  //   let currentIndex = 0;

  //   function updateCarousel() {
  //     const offset = -currentIndex * 100;
  //     carouselContent.style.transform = `translateX(${offset}%)`;
  //   }

  //   function showNextMessage() {
  //     currentIndex = (currentIndex + 1) % messages.length;
  //     updateCarousel();
  //   }

  //   function showPrevMessage() {
  //     currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  //     updateCarousel();
  //   }

  //   nextButton.addEventListener('click', showNextMessage);
  //   prevButton.addEventListener('click', showPrevMessage);

  //   // Troca automática de mensagens a cada 3 segundos
    // setInterval(showNextMessage, 3000);



  const messages = document.querySelectorAll('.message');
  let current = 0;

  function showMessage(index) {
    messages.forEach((msg, i) => {
      msg.style.display = i === index ? 'block' : 'none';
    });
  }

  document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + messages.length) % messages.length;
    showMessage(current);
  });

  document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % messages.length;
    showMessage(current);
  });

  showMessage(current);

