import React from 'react'
import {ShopItemFunc} from './ShopItemFunc'
import ShopItemClass from './ShopItemClass'
import img from '../image/1.jpg'

export const ShopItem = ({item}) => {

	return(
		<div className="wrapperMag">
               <div className="content">
                    <div className="cardImg">
                         <img src={img} alt="men"/>
                    </div>
                    {item.comp == 'func'? <ShopItemFunc item = {item}/> :
                    <ShopItemClass item = {item}/>}
               </div>
          </div>
		)
}