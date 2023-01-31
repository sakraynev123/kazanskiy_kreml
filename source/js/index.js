const buttonMenu = document.querySelector('.header__button');
const menuBackground = document.querySelector('.header__wrapper');
const menuNavigation = document.querySelector('.main-nav');
const bodyOverflow = document.querySelector('.body');
const accordionItems = document.querySelectorAll('.faq__item');
const navItems = document.querySelectorAll('.secondery-nav__link');
const seconderyNav = document.querySelectorAll('.secondery-nav');
const mainNavItems = document.querySelectorAll('.main-nav__item');
const fieldTel = document.querySelector('.form__field-tel');

let maskOptions = {
  mask: '+7 (000)000-00-00'
}
let mask = IMask(fieldTel, maskOptions)


mainNavItems.forEach((item) => {
  item.addEventListener('mouseover', (evt) => {
    item.classList.add('main-nav__item--active')
  })
})

document.addEventListener('mouseover', (evt) => {
  if (!evt.target.classList.contains('secondery-nav') && !evt.target.classList.contains('secondery-nav__item') && !evt.target.classList.contains('secondery-nav__link') && !evt.target.classList.contains('main-nav__link') && !evt.target.classList.contains('main-nav__item')) {
    mainNavItems.forEach((item) => {
      item.classList.remove('main-nav__item--active')
    })
  }
})

accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('faq__item--active')) {
      item.classList.remove('faq__item--active')
    }
    else {
      accordionItems.forEach((el) => {
     el.classList.remove('faq__item--active')})
     item.classList.toggle('faq__item--active')
    }
  })
})

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

const mainSwiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper__custom-button-next',
    prevEl: '.swiper__custom-button-prev',
  },
  loop: {
    boolean: true,
  },
  spaceBetween: 20,
  initialSlide: 1,
  centeredSlides: true,
  breakpoints: {
    1440: {
      centeredSlides: true,
      slidesPerView: 1.16,
      spaceBetween: 20,
    }
  }
})

const newsSwiper = new Swiper('.swiper-news', {
  loop: {
    boolean: true,
  },
  spaceBetween: 20,
  slidesPerView: 1.5,
})

if (window.innerWidth < 1440) {
  const newsSwiper = new Swiper('.swiper-news', {
  loop: {
    boolean: true,
  },
  spaceBetween: 20,
  slidesPerView: 1.5,
  breakpoints: {
    1440: {
      enabled: false,
    }
  }
})
}
else {
  newsSwiper.destroy(false)
}
