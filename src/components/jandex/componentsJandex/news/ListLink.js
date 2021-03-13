import React from 'react'
import {LinkBig} from '../general/LinkBig'

export const ListLink = (props) => {
	let date = props.date
	let optionsDate= {hour12:false}

	const monthHand = (month) => {
		let monthStr 
		switch(month){
			case 0: monthStr = 'января'
			break;
			case 1: monthStr = 'февраля'
			break;
			case 2: monthStr = 'марта'
			break;
			case 3: monthStr = 'апреля'
			break;
			case 4: monthStr = 'мая'
			break;
			case 5: monthStr = 'июня'
			break;
			case 6: monthStr = 'июля'
			break;
			case 7: monthStr = 'августа'
			break;
			case 8: monthStr = 'сентября'
			break;
			case 9: monthStr = 'октября'
			break;
			case 10: monthStr = 'ноября'
			break;
			case 11: monthStr = 'декабря'
			break;
		}
		return monthStr
	}

	const dayHand = (day) => {
		let dayStr 
		switch(day){
			case 0: dayStr = 'воскресенье'
			break;
			case 1: dayStr = 'понедельник'
			break;
			case 2: dayStr = 'вторник'
			break;
			case 3: dayStr = 'среда'
			break;
			case 4: dayStr = 'четверг'
			break;
			case 5: dayStr = 'пятница'
			break;
			case 6: dayStr = 'суббота'
			break;
		}
		return dayStr
	}

	return(
		<div className="listLink">
		{props.links.map((item,i) => {
			return <LinkBig text = {item} key = {`link${i}`}/>
		})}
		<p>{date.getDate()} {monthHand(date.getMonth())}, {dayHand(date.getDay())} {date.toLocaleString('ru-RU', optionsDate)}</p>
		</div>
		)
}