import React from 'react'
import {LinkSearch} from './LinkSearch'
import keyboard from './img/keyboard.svg'
import {Text} from '../general/Text'

export const Search = (props) => {
	return(
		<div className="search">	
			<LinkSearch linkSearch = {props.linkSearch}/>
			<div className="inputWrapper">
				<input type="text" autofocus="true"/>
				<img src={keyboard} alt=""/>
				<button>Найти</button>		
			</div>
			<div className="textBottom">
			<Text text = "Найдется все. Например, "/> 
			<span className="text"> фаза луны сегодня</span>
			</div>
		</div>
		)
}