// Capturamos los elementos

const open = document.getElementById('open-modal'),
		close = document.getElementById('close'),
		modal = document.getElementById('modal')

function openModal(){
	modal.classList.add('modal-activo')
}

function closeModal(){
	modal.classList.remove('modal-activo')
}

open.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
