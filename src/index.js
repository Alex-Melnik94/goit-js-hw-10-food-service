import menu from './menu.json'
import menuCard from './templates/menu-item.hbs'

const switchBtn = document.querySelector('#theme-switch-toggle')
const menuList = document.querySelector('.js-menu')
const body = document.querySelector('body')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme
const THEME_KEY = 'Theme'

setDefaultTheme()

function setDefaultTheme() {
  if (!localStorage.getItem(THEME_KEY)) {
    body.classList.add(LIGHT)
  } else {
    body.classList.add(localStorage.getItem(THEME_KEY))
  }
}

if (body.classList.value === DARK) {
  switchBtn.checked = true
}

switchBtn.addEventListener('change', onBtnChange)

function onBtnChange(e) {
  body.classList.toggle(LIGHT)
  body.classList.toggle(DARK)
  if (e.target.checked) {
  localStorage.setItem(THEME_KEY, DARK)
  } else {
  localStorage.setItem(THEME_KEY, LIGHT)
  }
}


const markup = menuCard(menu)

menuList.insertAdjacentHTML('beforeend', markup)


 

  
 




