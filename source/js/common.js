const header = document.querySelector('.header'),
      main = document.querySelector('main'),
      sidebarToggleButton = document.querySelectorAll('.sidebar__icon'),
      sidebarHiddenInfo = document.querySelectorAll('.sidebar-column__info');

sidebarToggleButton.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btn.nextElementSibling.classList.toggle('show-hidden-info');
  })
})

function setSpacing() {
  const headersHeight = header.clientHeight;
  main.style.marginTop = `${headersHeight}px`;
}

setSpacing();
