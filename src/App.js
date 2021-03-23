import React from 'react';
import './App.css';
import {Route,Switch,NavLink} from 'react-router-dom'
import {ShopItem} from './components/shopItem/ShopItem'
import {Clock} from './components/Clock/Clock'
import {Portfolio} from './components/portfolio/Portfolio'
import {Store} from './components/store/Store'
import {Dropdown} from './components/dropdown/Dropdown'
import {HexInRgb} from './components/hexInRgb/HexInRgb'
import {Workout} from './components/workout/Workout'
import {Jandex} from './components/jandex/Jandex'
import {Collapse} from './components/collapse/Collapse'
import {WorldClocks} from './components/worldclock/WorldClocks'
import {FormatDate} from './components/formatDate/FormatDate'

class App extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			items:{
				item:{
					brand: 'Tiger of Sweden',
  					title: 'Leonard coat',
  					description: 'Minimalistic coat in cotton-blend',
  					descriptionFull: 'Men"s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  					price: 399,
  					currency: '£',
  					comp:'func'
				}
			},
			date: new Date(2002,7,8)
		}
	}

	

  render(){

  	let date = ''

    return(  
        <div className="app">
        	<div className="nav">
        		<NavLink to='/shop'>Карточка магазина</NavLink>
        		<NavLink to='/clock'>Календарь</NavLink>
	    		<NavLink to='/store'>Магазин</NavLink>
	    		<NavLink to='/dropdown'>Выпадающий список</NavLink>
        		<NavLink to='/hir'>HEX в RGB</NavLink>
        		<NavLink to='/workout'>Учет тренировок</NavLink>
        		<NavLink to='/jandex'>Поисковик</NavLink>
	            	<NavLink to='/collapse'>Collapse</NavLink>
        		<NavLink to='/worldclock'>worldclocks</NavLink>
        		<NavLink to='/formatdate'>Форматирование даты</NavLink>
	    
        	</div>
        	
        	<Switch>
        		<Route path='/shop' render= {() => {
						return <ShopItem item = {this.state.items.item}/>
					}}/>
				<Route path='/clock' render= {() => {
						return(
							<div>
								<Clock date = {this.state.date}/>

								<div className="sendDate">
									<input type="date" onChange={(e)=>{
										date = e.target.value;
									}}/>
									<button onClick={()=>{
										this.setState({date:new Date(date)})
									}}>Отправить</button>
								</div>
								
							</div>
							
							)
					}}/>
			<Route path='/portfolio' component = {Portfolio}/>
			<Route path='/store' component = {Store}/>
			<Route path='/dropdown' component = {Dropdown}/>
			<Route path='/hir' component = {HexInRgb}/>
			<Route path='/workout' component = {Workout}/>
			<Route path='/jandex' component = {Jandex}/>
			<Route path='/collapse' component = {Collapse}/>
			<Route path='/worldclock' component = {WorldClocks}/>
			<Route path='/formatdate' component = {FormatDate}/>
        	</Switch>
          	
        </div>
      )
  }
}

export default App;
