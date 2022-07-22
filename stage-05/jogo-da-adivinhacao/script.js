// variaveis
let screen1 = document.querySelector('#screen1');
let screen2 = document.querySelector('#screen2');
let btnTry = document.querySelector('#screen1 button');
let btnAgain = document.querySelector('#screen2 button');
let input = document.querySelector('#screen1 input');

let random = Math.floor(Math.random() * 11);
let attempts = 0;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnAgain.addEventListener('click', handleResetClick);

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' && screen1.className == 'hide') {
    handleResetClick();
  }
});

// funções
function handleTryClick(e) {
  e.preventDefault(); // não faça o padrão do evento (no caso: não envie o form)

  if (input.value != '') {
    attempts++;
    let number = Number(input.value);

    if (number == random) {
      tooggleScreen();

      screen2.querySelector(
        'h2'
      ).textContent = `Acertou em ${attempts} tentativa(s)`;
    } else {
      input.value = '';
      input.focus();

      document.body.style.animationPlayState = 'running';

      btnTry.disabled = true;
      btnTry.style.opacity = 0.5;

      setTimeout(() => {
        document.body.style.animationPlayState = 'paused';
        btnTry.disabled = false;
        btnTry.style.opacity = 1;
      }, 1400);
    }
  } else {
    alert('Informe um número');
  }
}

function handleResetClick() {
  tooggleScreen();
  attempts = 0;

  random = Math.floor(Math.random() * 11);
}

function tooggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
