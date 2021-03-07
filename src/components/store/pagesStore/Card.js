import React from 'react';
import {ListView} from '../componentsStore/ListView'

export const Card = (props) => {
	return(
		<div className="card">
			<ListView products = {props.cards} click={props.removeItem} toggleItemLikes = {props.toggleItemLikes} textBtn = 'REMOVE IN CARD'/>
			<hr/>
			<div className="priceCard">
				<p className="text">К оплате:</p>
				<p className="price">
				{
					props.cards.reduce((acc,item,i) => {
						acc+= item.price;
						return acc
					},0)
				}$
				</p>
			</div>
		</div>
		)
}