const getRemainTime = deadline =>{
	let now = new Date(),
		 remainTime = (new Date(deadline) - now + 1000) / 1000,
		 remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
		 remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
		 remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
		 remainDays = Math.floor(remainTime / (3600 * 24));
	
	return{
		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}
}

const countdown = (deadline, elem) =>{
	const el = document.getElementById(elem);
	const timerUpdate = setInterval( ()=>{
		let t = getRemainTime(deadline);
		el.innerHTML = `<div class="c-time">
								<div class="c-time-number">${t.remainDays}</div>
								<div class="c-time-text">Días</div>
							</div>
							<div class="c-time">
								<div class="c-time-number">${t.remainHours}</div>
								<div class="c-time-text">Horas</div>
							</div>
							<div class="c-time">
								<div class="c-time-number">${t.remainMinutes}</div>
								<div class="c-time-text">Minutos</div>
							</div>
							<div class="c-time">
								<div class="c-time-number">${t.remainSeconds}</div>
								<div class="c-time-text">Segundos</div>
							</div>`;
		if(t.remainTime <= 1){
			clearInterval(timerUpdate)
		}
	}, 1000)
}

countdown('Oct 06 2018 10:32:53 GMT-500', 'clock')