import React from 'react'
import moment from 'moment';
import {WorldClock} from './WorldClock'
import './worldClock.css'


export class WorldClocks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date:moment.utc().format().toString().slice(0,19),
			dateUTC:[
				{utcClock:-3,country:'Moscow'},
			],
			country:'',
			utcClock:0
		}

		this.addClock = this.addClock.bind(this)
		this.removeClock = this.removeClock.bind(this)
	}

	componentDidMount(){
		this.interval = setInterval(()=>{
			this.setState({date:moment.utc().format().toString().slice(0,19)})
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.interval)
	}

	addCountry(value){
		this.setState({country:value})
	}

	addUTCClock(value){
		this.setState({utcClock:value})
	}

	addClock(){
		if(this.state.country){
			let dateUTC = this.state.dateUTC;
			dateUTC.push({country:this.state.country,
						  utcClock:this.state.utcClock})
			this.setState({dateUTC,country:'',utcClock:0})
		}
	}

	removeClock(id){
		let dateUTC = []
		let oldDateUTC = this.state.dateUTC
		

		for(let i = 0; i < oldDateUTC.length; i++){
			if(i != id){
				dateUTC.push(oldDateUTC[i])
			}
		}

		this.setState({dateUTC})
	}

	render(){
		return(
			<div className="wrapperClocks">
				<div className="inputClock">
					<label>Название<input type="text" value={this.state.country} onChange= {(e) => {this.addCountry(e.target.value)}}/></label>
					<label>Временной пояс(в часах)<input type="text" value={this.state.utcClock} onChange= {(e) => {this.addUTCClock(e.target.value)}}/></label>
					<button onClick = {this.addClock}>Добавить</button>
				</div>
				<div className="printClock">
					{this.state.dateUTC.map((item,i) => {
						return <WorldClock removeClock = {this.removeClock} utcClock = {item.utcClock} country = {item.country} dateGlobal={this.state.date} id = {i} key={i}/>
					})}
				</div>
			</div>	
			)
	}
}