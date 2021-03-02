import React from 'react';

export const ShopItem = (props) => {
	return(
		<div className="shopItem">
			<img src = {props.img} alt="product"/>
			<p className = "nameItem">{props.name}</p>
			<p className="colorItem">{props.color}</p>
			<p className = "priceItem">{props.price}$</p>
			<button>ADD TO CART</button>
		</div>
		)
}