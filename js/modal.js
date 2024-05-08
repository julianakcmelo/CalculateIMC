export const Modal = { // object literal / separando as responsabilidades

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() { // é a mesma coisa de uma função anônima
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

function handleClick() {
  Modal.close()
}

function handleKeydown(event) {
  if(event.key === 'Escape') { // ESC
    Modal.close()
  }
}

window.addEventListener('keydown', handleKeydown)
Modal.buttonClose.onclick = handleClick