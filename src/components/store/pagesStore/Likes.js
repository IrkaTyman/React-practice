import React from 'react';
import {ListView} from '../componentsStore/ListView'

export const Likes = (props) => {
	let likesArr = props.products
	return(
		<div className="likes">
			<ListView products = {
					likesArr.filter((item,i) => {
						return item.likes
					})
					} 
					  toggleItemLikes = {props.toggleItemLikes}
					  click={props.addItem} 
					  textBtn = 'ADD TO CART'/>
		</div>
		)
}