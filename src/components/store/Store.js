import React from 'react'
import './Store.css'
import {CardsView} from './CardsView'
import {ListView} from './ListView'
import {IconSwitch} from './IconSwitch'
import view_list from '../../image/view-list.svg'
import view_module from '../../image/view-module.svg'

export class Store extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			products: [
			  {name: "Nike Metcon 2",
			  price: "130",
			  color: "red",
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},
			  {name: "Nike Metcon 2",
			  price: "130",
			  color: "green",
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},
			  {name: "Nike Metcon 2",
			  price: "130",
			  color: "blue",
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},
			  {name: "Nike Metcon 2",
			  price: "130",
			  color: "black",
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},
			  {name: "Nike free run",
			  price: "170",
			  color: "black",
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},
			  {name: "Nike Metcon 3",
			  price: "150",
			  color: "green",
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}
			],

			icon: 'view_list'
		}
	}

	onSwitch = () => {
		this.state.icon == 'view_list' ? 
						this.setState({icon:'view_module'}) : 
						this.setState({icon:'view_list'})
	}

	render(){
		return(
			<div className="store">
				<IconSwitch icon = {this.state.icon} 
					click = {this.onSwitch}
					img={this.state.icon == 'view_list' ? view_module : view_list}/>
				{this.state.icon == 'view_list' ? 
						<ListView products = {this.state.products}/> : 
						<CardsView products = {this.state.products}/>
				}
			</div>
			)
	}
}