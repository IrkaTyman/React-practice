import React from 'react';
import like from '../../../image/like.svg'

export const ShopItem = (props) => {
	return(
		<div className="shopItem">
			<img src = {props.img} alt="product"/>
			<p className = "nameItem">{props.name}</p>
			<p className="colorItem">{props.color}</p>
			<p className = "priceItem">{props.price}$</p>
			<p className={props.likes ? 'like likeActive' : 'like'} onClick = {() => {props.toggleItemLikes(props.value)}}>
				Избранное
				<img src={like} alt="" />
			</p>
			
			<button value={props.value} onClick={() => {props.click(props.value)}}>{props.textBtn}</button>
		</div>
		)
}