import React from 'react'


class ShopItemClass extends React.Component{
	constructor({item}){
          super(item)
          this.state = {
               brand: item.brand,
               title: item.title,
               description: item.description,
               descriptionFull: item.descriptionFull,
               price: item.price,
               currency: item.currency
          }
     }
     render(){
          return(
               <div className="cardInfo">
                    <h2>{this.state.brand}</h2>
                    <h1>{this.state.title}</h1>
                    <p className="descr">{this.state.description}</p>
                    <p className="descrFull">
                         {this.state.descriptionFull}
                    </p>
                    <hr/>
                    <div className="wrapperBuy">
                         <p className="price">{this.state.currency}{this.state.price}</p>
                         <button>Добавить в корзину</button>
                    </div>
               </div>
          )
     }
	
}

export  default ShopItemClass;
