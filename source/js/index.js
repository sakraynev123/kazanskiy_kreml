const buttonMenu = document.querySelector('.header__button');
const menuBackground = document.querySelector('.header__wrapper');
const menuNavigation = document.querySelector('.main-nav');

buttonMenu.addEventListener('click', () => {
  menuNavigation.classList.toggle('main-nav--active');
  buttonMenu.classList.toggle('header__button--close');
  menuBackground.classList.toggle('header__wrapper--active')
})

menuBackground.addEventListener('click', () => {
  if (buttonMenu.classList.contains('header__button--close')) {
    buttonMenu.classList.remove('header__button--close');
    menuNavigation.classList.remove('main-nav--active');
    menuBackground.classList.remove('header__wrapper--active');
  }
})

