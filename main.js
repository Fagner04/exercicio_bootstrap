
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
}, 5000); // troca a cada 5 segundos


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

// document.getElementById("alerta").style.display = "block";

  // O código JavaScript que manipula o evento de envio do formulário
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();  // Previne o envio padrão do formulário
            document.getElementById('alerta').style.display = 'block';  // Exibe o alerta de sucesso

             // Esconde o alerta após 4 segundos
             setTimeout(function() {
                document.getElementById('alerta').style.display = 'none';
            }, 1700);  // 4000 milissegundos = 4 segundos
        });

