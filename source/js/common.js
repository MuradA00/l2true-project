const header = document.querySelector('.header'),
      main = document.querySelector('main');

function setSpacing() {
  const headersHeight = header.clientHeight;
  main.style.marginTop = `${headersHeight}px`;
}

setSpacing();
