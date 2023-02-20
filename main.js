import modifyNav from './modifyDom'
import './style.css'

const $ = classId => document.querySelector(classId)

const background = $('#parallaxBackground')
const left = $('#parallaxLeft')
const right = $('#mineRight')
const gold = $('#mineGold')
const textSection = $('#textSection')
const nameSection = $('.name-section')

modifyNav()

let exeTyping = false
let typingName = false
let i = 0
let j = 0

const text = 'I\'m web developer, I can develop any aplication, with dedication and time, I sure that I will achieve it, I can control programming languages like, Node js, Java, Javascript, React and really any language that I propose me, I\'m able to learn quickly'
const nameText = 'Brayan Esteban Villamizar Fernandez'

window.addEventListener('scroll', () => {
  const value = window.scrollY * 0.3
  background.style.top = `${value}px`
  left.style.top = `${value}px`
  right.style.top = `${value}px`

  if (value >= textSection.offsetTop - 70 && !exeTyping) {
    exeTyping = true
    typing(textSection, text, exeTyping, i)
  }
  if (value < textSection.offsetTop - 70) {
    exeTyping = false
    i = 0
    textSection.innerHTML = ''
  }

  if (value >= nameSection.offsetTop + 370 && !typingName) {
    typingName = true
    typing(nameSection, nameText, typingName, j)
  }
  if (value < nameSection.offsetTop + 370) {
    typingName = false
    j = 0
    nameSection.innerHTML = ''
  }
})

document.addEventListener('mousemove', (e) => {
  const x = e.clientX * -0.1
  const y = e.clientY * -0.1
  gold.style.transform = `translate(${x}px, ${y}px)`
})

function typing (textSelect, myText, executeTyping, iterator) {
  if (!exeTyping && !typingName) return
  if (iterator < myText.length) {
    textSelect.innerHTML += myText[iterator]
    iterator++
    setTimeout(() => typing(textSelect, myText, executeTyping, iterator), 25)
  }
}
