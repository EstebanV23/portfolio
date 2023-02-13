import modifyNav from './modifyDom'
import './style.css'

const $ = classId => document.querySelector(classId)

const background = $('#parallaxBackground')
const left = $('#parallaxLeft')
const right = $('#mineRight')
const gold = $('#mineGold')
const texts = $('.presentation-texts')
const textSection = $('#textSection')

modifyNav()

let exeTyping = false
let i = 0

window.addEventListener('scroll', () => {
  const value = window.scrollY * 0.3
  background.style.top = `${value}px`
  left.style.top = `${value}px`
  right.style.top = `${value}px`
  const valueTexts = 90
  value > valueTexts
    ? texts.style.transform = `translate(${value}%, ${value * 1.3}px)`
    : texts.style.transform = `translate(0%, ${value}px)`

  if (value >= textSection.offsetTop - 70 && !exeTyping) {
    exeTyping = true
    typing()
  }
  if (value < textSection.offsetTop - 70) {
    exeTyping = false
    i = 0
    textSection.innerHTML = ''
  }
})

document.addEventListener('mousemove', (e) => {
  const x = e.clientX * -0.1
  const y = e.clientY * -0.1
  gold.style.transform = `translate(${x}px, ${y}px)`
})

const text = 'I\'m web developer, I can develop any aplication, with dedication and time, I sure that I will achieve it, I can control programming languages like, Node js, Java, Javascript, React and really any language that I propose me, I\'m able to learn quickly'

function typing () {
  if (i < text.length) {
    textSection.innerHTML += text[i]
    i++
    setTimeout(typing, 20)
  }
}
