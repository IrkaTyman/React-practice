import React from 'react'
import './Portfolio.css'
import {Toolbar} from './Toolbar'
import {ProjectList} from './ProjectList'

export class Portfolio extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			filters: ['All', 'Websites','Flayers','Business Cards'],
			selected: 'All',
			projects: [
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
				category: "Business Cards"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
				category: "Business Cards"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
				category: "Business Cards"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
				category: "Flayers"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
				category: "Business Cards"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
				category: "Business Cards"}, {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
				category: "Websites"},
				{img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
				category: "Flayers"}
			]
		}
	}

	onSelectedFilter= (e) => {
		let selected = e.target.value;		
		this.setState({selected});
		let activesBut = document.querySelector('.actives');
		if(activesBut) activesBut.classList.remove('actives')
		e.target.classList.add('actives')

	}

	render(){
		return(
			<div className='portfolio'>
				<Toolbar click = {this.onSelectedFilter} 
					 filters = {this.state.filters} 
					 selected={this.state.selected}/>
				<ProjectList projects = {this.state.projects}
							 selected={this.state.selected}/>
			</div>
			
			)
	}
}
