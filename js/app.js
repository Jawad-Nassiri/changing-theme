const body = document.querySelector('html');
const jsImgElement = document.querySelector('.js')
const reactImgElement = document.querySelector('.react-js')
const nextImgElement = document.querySelector('.next-js')
const changeThemeBtn = document.querySelector('button')


let theme = "light"



function changeTheme() {
  localStorage.setItem('theme', theme)

  if(theme === "light") {
    theme = 'dark'
    localStorage.setItem('theme', 'dark')
  } else {
    theme = 'light'
    localStorage.setItem('theme', 'light')
  }

  setTheme()
}

function detectTheme() {
  const currentTheme = localStorage.getItem('theme')
  
  if(currentTheme) {
    theme = currentTheme;
  }

  setTheme()
}


function setTheme() {
  if(theme === "light") {
    body.classList.remove('dark')
    body.classList.add('light')
    jsImgElement.src = "images/light-js.png"
    reactImgElement.src = "images/light-reactjs.png"
    nextImgElement.src = "images/light-nextjs.png"
  } else {
    body.classList.remove('light')
    body.classList.add('dark')
    jsImgElement.src = "images/dark-js.png"
    reactImgElement.src = "images/dark-reactjs.png"
    nextImgElement.src = "images/dark-nextjs.png"
  }
}




changeThemeBtn.addEventListener('click', changeTheme);