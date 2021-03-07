import React from 'react';
import view_list from '../../../image/view-list.svg'
import view_module from '../../../image/view-module.svg'
import {CardsView} from '../componentsStore/CardsView'
import {ListView} from '../componentsStore/ListView'
import {IconSwitch} from '../componentsStore/IconSwitch'

export const Home = (props) => {
	return(
		<div className="homePages">
		<IconSwitch icon = {props.icon} 
			click = {props.onSwitch}
			img={props.icon == 'view_list' ? view_module : view_list}/>
		{props.icon == 'view_list' ? 
				<ListView products = {props.products} click={props.addItem} toggleItemLikes = {props.toggleItemLikes} textBtn = 'ADD TO CARD'/> : 
				<CardsView products = {props.products} click={props.addItem} toggleItemLikes = {props.toggleItemLikes}/>
		}
		</div>
		)
}