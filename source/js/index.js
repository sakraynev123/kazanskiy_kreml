const buttonMenu = document.querySelector('.header__button');
const menuBackground = document.querySelector('.header__wrapper');
const menuNavigation = document.querySelector('.main-nav');
const bodyOverflow = document.querySelector('.body');

buttonMenu.addEventListener('click', () => {
  menuNavigation.classList.toggle('main-nav--active');
  buttonMenu.classList.toggle('header__button--close');
  menuBackground.classList.toggle('header__wrapper--active')
  bodyOverflow.classList.toggle('body__active-menu')
})

menuBackground.addEventListener('click', () => {
  if (buttonMenu.classList.contains('header__button--close')) {
    buttonMenu.classList.remove('header__button--close');
    menuNavigation.classList.remove('main-nav--active');
    menuBackground.classList.remove('header__wrapper--active');
    bodyOverflow.classList.remove('body__active-menu');
  }
})

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper__custom-button-next',
    prevEl: '.swiper__custom-button-prev',
  },
  loop: {
    boolean: true,
  },
  spaceBetween: 20,
})
