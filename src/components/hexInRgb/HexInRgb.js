import React from 'react'
import './HexInRgb.css'



function inputHandler(e){
	const answer = document.querySelector('.hir-answer')
const hirWrap = document.querySelector('.hexInRgb-wrapper')
		let value = e.target.value;
		let reg = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
		if(value.length == 7 ){
			if (reg.test(value)) {
				let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
				answer.innerHTML = `rgb(${ parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
				hirWrap.style.backgroundColor = value
			} else answer.innerHTML = 'Ошибка'
		}
	}

export const HexInRgb = () =>{
	


		

	return(
		<div className="hexInRgb-wrapper">
			<div className="hir">
			<div className="hir_input">
				<input type="text" placeholder="#ffffff" onChange = {(e) => {inputHandler(e)}}/>
			</div>
				
				<p className="hir-answer">rgb(52, 73, 94)</p>
			</div>
			
		</div>
		)

}