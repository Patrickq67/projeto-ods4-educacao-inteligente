let map;
function initMap() {
    const position = { lat: -30.0688868, lng: -51.1202864 }
    map = new google.maps.Map(document.querySelector('.map'), {
        center: position,
        zoom: 14
    });
    var marker = new google.maps.Marker({ position, map });
};

// Sticky menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 90) {
        this.document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});

// jquery Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('message').value.trim();
  
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    if (!emailValido) {
      alert('Por favor, insira um email válido.');
      return;
    }
  
    alert('Mensagem enviada com sucesso!');
    this.reset(); // limpa os campos após envio
  });



