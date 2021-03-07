import React from 'react';
import like from '../../../image/like.svg'

export const ShopCards = (props) => {
	return(
		<div className="shopCard">
		    <div className={props.likes ? 'like likeActive likeInCard' : 'like likeInCard'} onClick={() => {props.toggleItemLikes(props.value)}}>
		    	<img src={like} alt="like"/>
		    </div>
			
			<p className = "nameItem">{props.name}</p>
			<p className="colorItem">{props.color}</p>
			<img src = {props.img} alt="product"/>
			<div className="shopCard__price-btn">
				<p className = "priceItem">{props.price}$</p>
				<button value={props.value} onClick={(e) => {props.click(props.value)}}>ADD TO CART</button>
			</div>
		</div>
		)
}