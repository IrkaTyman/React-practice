import React from 'react'
import moment from 'moment';

export const WorldClock = (props) => {
	let utcClock = +props.utcClock
	let dateGlobal = props.dateGlobal
	let date = moment.utc(`${dateGlobal}${utcClock >= 0 ? '+' : '-'}${(Math.abs(utcClock/10)| 0) > 0 ? Math.abs(utcClock) : '0'+Math.abs(utcClock)}:00`).format('HH:mm:ss')
	let id = props.id
	return(
		<div className="wrapperClock">
			<p>{props.country}</p>
			<div className="clock">
			<div className="close" onClick={() => props.removeClock(id)}>x</div>
				<p>{date}</p>
			</div>
		</div>
		)
}