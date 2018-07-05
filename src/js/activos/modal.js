const open = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const close = document.getElementById('close')

open.addEventListener('click', () => {
	console.log('boton open')
	modal.classList.toggle('zoom-in')
	modal.classList.remove('zoom-out')
})

close.addEventListener('click', () => {
	console.log('boton close')
	modal.classList.replace('zoom-in', 'zoom-out')
})