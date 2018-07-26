const btnWhapp = document.getElementById('open-whapp');
const whapp = document.getElementById('whapp'); 

btnWhapp.addEventListener('click', () => {
	if(whapp.className == 'zoom-in'){
		whapp.classList.replace('zoom-in', 'zoom-out');
	}else if(whapp.className == 'zoom-out'){
		whapp.classList.replace('zoom-out', 'zoom-in');				
	}else{
		whapp.classList.add('zoom-in');
	}	
})