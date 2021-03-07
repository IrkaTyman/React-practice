import React from 'react';
import {ShopCards} from './ShopCards'

export const CardsView = (props) => {
	return(
		<div className="cardItems">
			{props.products.map((item,i) => {
				return <ShopCards name = {item.name}
								 price = {item.price}
								 color= {item.color}
								 img = {item.img}
								 value = {item.id}
								 click = {props.click}
								 likes = {item.likes}
								 toggleItemLikes = {props.toggleItemLikes}/>
			})}
		</div>
		)
} 