// Mostra ou fecha a navbar mobile
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Fecha a navbar mobile quando um link é pressionado
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Ativa o link do menu conforme a seção da página
const sections = document.querySelectorAll('main section[id]')

function activateMenuCurrentSection() {
  /*
   * Soma a posição Y da tela
   * à altura da tela (ex: 920px)
   * dividida em 2 partes (ex: 920 / 2 = 460)
   *
   * Tudo isso para o checkPoint ser reconhecido no meio da tela
   * e não no final
   */
  const checkPoint = window.pageYOffset + window.innerHeight / 2

  for (const section of sections) {
    // Pega a posição fixa de cada section
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    /*
     * Recebem booleans para verificar se a section
     * está no checkPoint
     */
    const checkPointStart = checkPoint >= sectionTop
    const checkPointEnd = checkPoint <= sectionTop + sectionHeight

    // Captura a tag a que tem o href com o id da section
    const nav = document.querySelector('nav ul li a[href*=' + sectionId + ']')

    if (checkPointStart && checkPointEnd) {
      nav.classList.add('active')
    } else {
      nav.classList.remove('active')
    }
  }
}

// Quanto acontece o evento de scroll
window.addEventListener('scroll', function () {
  activateMenuCurrentSection()
})

// Cria e posiciona as estrelas
const rocket = document.querySelector('#rocket')
for (let i = 0; i < 200; i++) {
  const star = document.createElement('span')
  star.classList.add('star')

  let x = Math.floor(Math.random() * rocket.clientWidth)
  const randomWidth = Math.round(Math.random() * (2 - 1) + 1)
  const randomHeight = Math.round(Math.random() * (200 - 100) + 1)
  const duration = Math.random() * 1

  star.style.left = `${x}px`
  star.style.width = `${randomWidth}px`
  star.style.height = `${randomHeight}px`
  star.style.animationDuration = `${duration}s`

  rocket.appendChild(star)
}
