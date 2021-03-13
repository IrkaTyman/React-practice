import React from 'react'
import {Search} from './componentsJandex/search/Search'
import {News} from './componentsJandex/news/News'
import {Diffrent} from './componentsJandex/diffrent/Diffrent'
import {Advertising} from './componentsJandex/advertising/Advertising'
import './Jandex.css'

export class Jandex extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			temperature:17,
			news:[
				'Путин упростил получение автомобильных номеров',
				'В команде Зелемнского раскрыли план реформ на Украине',
				'"Турпомощь" прокомментировала гибель десятков россиян на Анталье',
				'Суд закрыл дело Демпартии США против России',
				'На украине призвали создать ракеты для удара по Москве'
			],

			linkNews:[
				'Сейчас в СМИ',
				'в Германии',
				'Рекомендуем'
			],

			linkSearch: [
			'Видео',
			'Картинки',
			'Новости',
			'Карты',
			'Маркет',
			'Переводчик',
			'Эфир',
			'еще',],
			date:new Date()
		}
	}

	componentDidMount(){
		this.interval =setInterval(()=>this.setState({date:new Date()}),1000)
	}

	componentDidUnmount(){
		clearInterval(this.interval)
	}

	render(){
		return(
			<div className="wrapperJandex">
				<div className="jandex">
				<News news={this.state.news} links={this.state.linkNews} date={this.state.date}/>
				<Search linkSearch={this.state.linkSearch}/>
				<Advertising/>
				<Diffrent/>
				</div>
			</div>
			)
	}
}