import React from 'react';

export const ShopCards = (props) => {
	return(
		<div className="shopCard">
			<p className = "nameItem">{props.name}</p>
			<p className="colorItem">{props.color}</p>
			<img src = {props.img} alt="product"/>
			<div>
				<p className = "priceItem">{props.price}$</p>
				<button>ADD TO CART</button>
			</div>
		</div>
		)
}