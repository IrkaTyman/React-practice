import React from 'react'

export const ShopItemFunc = ({item}) => {
	console.log(item)
	return(
			<div className="cardInfo">
          		<h2>{item.brand}</h2>
          		<h1>{item.title}</h1>
          		<p className="descr">{item.description}</p>
          		<p className="descrFull">
          			{item.descriptionFull}
          		</p>
          		<hr/>
          		<div className="wrapperBuy">
          			<p className="price">{item.currency}{item.price}</p>
          			<button>Добавить в корзину</button>
          		</div>
          	</div>
		)
}