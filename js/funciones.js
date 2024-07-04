document.addEventListener('DOMContentLoaded', function () {
  const ventana1 = document.querySelector('.ventana-1');
  const ventana2 = document.querySelector('.ventana-2');
  const ventana3 = document.querySelector('.ventana-3');
  const ventana4 = document.querySelector('.warning2'); // Ventana de advertencia

  const btnCerrar1 = document.querySelector('.ventana-1 .cerrar button');
  const btnCerrar2 = document.querySelector('.ventana-2 .cerrar button');
  const btnCerrar3 = document.querySelector('.ventana-3 .cerrar button');
  const btnCerrar4 = document.querySelector('.warning2 .cerrar button');

  const btnAceptar1 = document.querySelector('.ventana-1 .btn_inicio_Warning');
  const btnAceptar2 = document.querySelector('.ventana-2 .btn_acept');
  const btnAceptar4 = document.querySelector('.warning2 .buttons button'); // Botón aceptar de la advertencia

  const computer = document.querySelector('.computer');
  const fondoCompu = document.querySelector('.fondo-compu');
  const menuCompu = document.querySelector('.menu-compu');
  const containerCompu = document.querySelector('.container-compu');
  const fondoCompu2 = document.querySelector('.compu-fondo');

  const ventanas = [ventana1, ventana2, ventana3, ventana4];

  const escenario1 = document.getElementById('escenario-1');
  const escenario2 = document.getElementById('escenario-2'); //
  const escenario3 = document.getElementById('escenario-3');

  console.log(escenario2);
  function mostrarVentana(ventana) {
    ventanas.forEach((v) => {
      if (v === ventana) {
        v.classList.remove('animate__fadeOut');
        v.style.display = 'block';
        v.classList.add('animate__animated', 'animate__fadeIn');
      } else {
        v.classList.remove('animate__fadeIn');
        v.classList.add('animate__fadeOut');
        setTimeout(() => {
          v.style.display = 'none';
        }, 1000); // Duración de la animación (1 segundo)
      }
    });
  }

  function escalarElementos() {
    computer.classList.add('scale-up-computer');
    fondoCompu.classList.add('scale-up-fondo-compu');
    menuCompu.classList.add('resize-menu-compu');
    containerCompu.classList.add('resize-container-compu');
    fondoCompu2.classList.add('scale-up-fondo-compu2');
  }

  function escalarElementosCompleto() {
    computer.classList.remove('scale-up-computer');
    fondoCompu.classList.remove('scale-up-fondo-compu');
    menuCompu.classList.remove('resize-menu-compu');
    containerCompu.classList.remove('resize-container-compu');
    fondoCompu2.classList.remove('scale-up-fondo-compu2');

    computer.classList.add('scale-up-full-computer');
    fondoCompu.classList.add('scale-up-full-fondo-compu');
    menuCompu.classList.add('resize-full-menu-compu');
    containerCompu.classList.add('resize-full-container-compu');
    fondoCompu2.classList.add('scale-up-full-fondo-compu2');

    setTimeout(() => {
      computer.classList.add('ocultar');
    }, 1000); // Duración de la animación (1 segundo)
  }

  if (btnCerrar1) {
    btnCerrar1.addEventListener('click', function () {
      ventana1.classList.add('animate__fadeOut');
      setTimeout(() => {
        ventana1.style.display = 'none';
      }, 1000);
    });
  }

  if (btnCerrar2) {
    btnCerrar2.addEventListener('click', function () {
      ventana2.classList.add('animate__fadeOut');
      setTimeout(() => {
        ventana2.style.display = 'none';
      }, 1000);
    });
  }

  if (btnCerrar3) {
    btnCerrar3.addEventListener('click', function () {
      ventana3.classList.add('animate__fadeOut');
      setTimeout(() => {
        ventana3.style.display = 'none';
      }, 1000);
    });
  }

  if (btnCerrar4) {
    btnCerrar4.addEventListener('click', function () {
      ventana4.classList.add('animate__fadeOut');
      setTimeout(() => {
        ventana4.style.display = 'none';
        ventana3.classList.remove('blur'); // Quitamos el difuminado de la ventana 3
      }, 1000);
      
    });
  }

  if (btnAceptar1) {
    btnAceptar1.addEventListener('click', function () {
      mostrarVentana(ventana2);
      escalarElementos();
    });
  }

  if (btnAceptar2) {
    btnAceptar2.addEventListener('click', function () {
      mostrarVentana(ventana3);
      escalarElementosCompleto();
    });
  }

  if (btnAceptar4) {
    btnAceptar4.addEventListener('click', function () {
      ventana4.classList.add('animate__fadeOut');
      setTimeout(() => {
        ventana4.style.display = 'none';
        ventana3.classList.remove('blur');
      }, 1000);
      window.top.postMessage('nextScenario', '*');
    });
  }

  window.addEventListener('message', function (event) {
    if (event.data === 'showWarning2') {
      ventana3.classList.add('blur');
      ventana4.style.display = 'block';
      ventana4.classList.remove('animate__fadeOut');
      ventana4.classList.add('animate__animated', 'animate__fadeIn');
    }
  });

  // Inicialmente solo se muestra la ventana 1 con animación
  mostrarVentana(ventana1);

  // Función para mostrar el escenario 2 y ocultar el escenario 1
  function mostrarEscenarios() {
    escenario1.classList.remove('visible');
    escenario1.classList.add('hidden');

    setTimeout(() => {
      escenario2.classList.remove('hidden');
      escenario2.classList.add('visible');

      escenario3.classList.remove('hidden');
      escenario3.classList.add('visible');
    }, 1000); // Duración de la transición (1 segundo)
  }
  window.addEventListener('scroll', function () {
    const container2 = document.querySelector('.container_2');
    const container2Position = container2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;
  
    if (container2Position < screenPosition) {
      const elemento1 = document.querySelector('.container_2 .elemento-1');
      const elemento2 = document.querySelector('.container_2 .elemento-2');
  
      elemento1.style.opacity = '0'; // Oculta elemento 1
      elemento2.style.opacity = '1'; // Muestra elemento 2
  
      setTimeout(() => {
        elemento1.style.display = 'none'; // Oculta elemento 1 después de la transición
      }, 1000); // Duración de la animación (1 segundo)
    }
  });
  const elemento1 = document.querySelector('.container_2 .elemento-1');
  const elemento2 = document.querySelector('.container_2 .elemento-2');

  window.addEventListener('scroll', function () {
    const container2 = document.querySelector('.container_2');
    const container2Position = container2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (container2Position < screenPosition) {
      // Añadir animaciones de salida para elemento-1
      elemento1.classList.add('animate__animated', 'animate__fadeOutRightBig');

      // Esperar hasta que la animación de salida termine antes de mostrar elemento-2
      elemento1.addEventListener('animationend', function handleAnimationEnd() {
        elemento1.classList.add('hidden');
        elemento2.classList.remove('hidden');
        elemento2.classList.add('animate__animated', 'animate__fadeInLeft');

        // Eliminar el listener para evitar múltiples llamadas
        elemento1.removeEventListener('animationend', handleAnimationEnd);
      });
    }
  });  
});
