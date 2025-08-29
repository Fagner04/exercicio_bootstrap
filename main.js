
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


  setInterval(() => {
  current = (current + 1) % messages.length;
  showMessage(current);
}, 4000); // troca a cada 5 segundos


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


