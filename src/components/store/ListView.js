import React from 'react';
import {ShopItem} from './ShopItem'

export const ListView = (props) => {
	return(
		<div className="listItems">
			{props.products.map((item,i) => {
				return <ShopItem name = {item.name}
								 price = {item.price}
								 color= {item.color}
								 img = {item.img}/>
			})}
		</div>
		)
} 