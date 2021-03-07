import React from 'react'
import {Route,Switch,NavLink} from 'react-router-dom'
import './Store.css'
import {Home} from './pagesStore/Home'
import {Card} from './pagesStore/Card'
import {Likes} from './pagesStore/Likes'
import {Navbar} from './componentsStore/Navbar'


export class Store extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			products: [
			  {name: "Nike Metcon 2",
			  price: 130,
			  color: "red",
			  likes:false,
			  id:0,
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},
			  {name: "Nike Metcon 2",
			  price: 130,
			  color: "green",
			  likes:false,
			  id:1,
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},
			  {name: "Nike Metcon 2",
			  price: 130,
			  color: "blue",
			  likes:false,
			  id:2,
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},
			  {name: "Nike Metcon 2",
			  price: 130,
			  color: "black",
			  likes:false,
			  id:3,
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},
			  {name: "Nike free run",
			  price: 170,
			  color: "black",
			  likes:false,
			  id:4,
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},
			  {name: "Nike Metcon 3",
			  price: 150,
			  color: "green",
			  likes:false,
			  id:5,
			  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}
			],

			cards:[
			 
			],

			icon: 'view_list',
			active:'home'
		}
	}

	onSwitch = () => {
		this.state.icon == 'view_list' ? 
						this.setState({icon:'view_module'}) : 
						this.setState({icon:'view_list'})
	}

	navbarHandler = (page) => {
		this.setState({active:page})
		console.log(this.state.active)
	}

	addItemCard = (id) => {
		let cards = this.state.cards
		let item = this.state.products[id]

		for(let i =0; i< cards.length; i++){
			if(cards[i] && cards[i].img == item.img) return false
		}

		cards.push(item)
		this.setState({cards})
	}

	removeItemCard = (id) => {
		let cards = this.state.cards

		for(let i = 0; i < cards.length; i++){
			if (cards[i].id == id) {console.log(id,'r',cards[i],i)
				console.log(cards.splice(i,1))
				}
		}
	
		
		this.setState({cards})
	}

	toggleItemLikes = (id) => {
		let products = this.state.products
		products[id].likes = !this.state.products[id].likes
		this.setState({products})
	}

	render(){
		return(
			<div className="store">
				<Navbar navbarHandler = {this.navbarHandler}/>		
				{this.state.active == 'home' ? 
				<Home icon = {this.state.icon} 
					  onSwitch = {this.onSwitch}
					  products = {this.state.products}
					  addItem = {this.addItemCard}
					  toggleItemLikes = {this.toggleItemLikes}/> : this.state.active == 'card' ? 
				<Card cards = {this.state.cards}
					  removeItem = {this.removeItemCard} 
					  toggleItemLikes = {this.toggleItemLikes}/> :
				<Likes toggleItemLikes = {this.toggleItemLikes} 
					   products={this.state.products} 
					   addItem = {this.addItemCard}/>}
			</div>
			)
	}
}