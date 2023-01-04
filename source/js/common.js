const header = document.querySelector('.header'),
      main = document.querySelector('main'),
      sidebarToggleButton = document.querySelectorAll('.sidebar__icon'),
      sidebarHiddenInfo = document.querySelectorAll('.sidebar-column__info'),
      descriptionBody = document.querySelector('.description'),
      sidebar = document.querySelector('.sidebar'),
      body = document.body,
      burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.menu'),
      closeIcon = document.querySelector('.menu__close'),
      modalTriggers = document.querySelectorAll('.downloadBtn'),
      modalDownload = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close'),
      mobNavLinks = document.querySelectorAll('.menu-nav__link');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    modalDownload.classList.add('show-modal')
    body.style.overflow = 'hidden';
  })
})

sidebarToggleButton.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btn.nextElementSibling.classList.toggle('show-hidden-info');
  })
})

function closeMenuByClick() {
  mobNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show-menu')
      body.classList.remove('body-locked');
      burger.classList.remove('active-burger')
    })
  })
}

function closeModal() {
  modalDownload.classList.remove('show-modal')
  body.style.overflow = '';
}

function closeMenu() {
  closeIcon.classList.add('closed');
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked');
}

function showMenu() {
  closeIcon.classList.remove  ('closed')
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked');
  }
}

function setSpacing() {
  const headersHeight = header.clientHeight;
  main.style.marginTop = `${headersHeight}px`;
}

modalClose.addEventListener('click', closeModal);
setSpacing();
closeMenuByClick();
burger.addEventListener('click', showMenu);
closeIcon.addEventListener('click', closeMenu);

