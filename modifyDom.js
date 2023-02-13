const $ = classId => document.querySelector(classId)
const allSelect = className => document.querySelectorAll(className)

const presentationLinks = allSelect('.presentation-link')
const navLinks = allSelect('.nav-link')
const inputModal = $('#modal-open')
const buttonNav = $('#button-nav')

function hideShowGroupLinks (inputCheck) {
  const inverseCheck = !inputCheck.checked
  inputCheck.checked = inverseCheck
}

function addEvents (groupElements, callBack) {
  groupElements.forEach(element => {
    element.addEventListener('click', callBack)
  })
}

const modifyNav = () => {
  addEvents(presentationLinks, () => hideShowGroupLinks(inputModal))
  addEvents(navLinks, () => hideShowGroupLinks(buttonNav))
}

export default modifyNav
