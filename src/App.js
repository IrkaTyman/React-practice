import React from 'react';
import './App.css';
import {Route,Switch,NavLink} from 'react-router-dom'
import {ShopItem} from './components/ShopItem'
import {Clock} from './components/Clock'

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
        	</Switch>
          	
        </div>
      )
  }
}

export default App;
