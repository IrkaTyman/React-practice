import React from 'react'
import playBtn from './img/play.svg'

export const Advertising = () => {
	return(
		<div className="advertising">
			<button className="advertisingBtn">
				<img src={playBtn} alt=""/>
				Смотрите трейлер
			</button>
		</div>
		)
}