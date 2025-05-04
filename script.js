'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalButton = document.querySelector('.close-modal')
const openModalButtons = document.querySelectorAll('.show-modal')




//Functions to Open and Close Windows 
const openWindow = () =>{
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeWindow = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

//For Loop to Add Event Listeners for Modals 
for(const element of openModalButtons){
  element.addEventListener('click', openWindow) 
  closeModalButton.addEventListener('click', closeWindow)
}

//Event Listener for Key Presses 
document.addEventListener('keydown', function(e){
  console.log(e)
  if(!modal.classList.contains('hidden') && e.key === 'Escape') closeWindow()
})