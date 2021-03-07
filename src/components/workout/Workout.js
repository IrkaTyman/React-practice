import React,{useState} from 'react'
import './Workout.css'

export class Workout extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			work:[
				
			],
			dateValue:'',
			lenValue:'',
		}
	}
	
	sortDate = (a,b) => {
		if(a.id < b.id) {return -1}
		else if (a.id > b.id) {return 1}
		else {return 0}
	}

	inputHandler = (e) => {
		let target = e.target
		if(target.id == 'date') this.setState({dateValue:target.value}) 
		else this.setState({lenValue:target.value})
	}

	buttonHandler = () => {
		let work = this.state.work
		let kol = 0
		if(this.state.dateValue && this.state.lenValue){
			let date = this.state.dateValue.split('-');
			for(let i = 0; i < work.length;i++){
				if(work[i].id == new Date(this.state.dateValue).getTime()){
					work[i].length += +this.state.lenValue
					kol=1
				}
			}
			if (kol != 1) {
				work.push({date, 
				length:+this.state.lenValue, 
				id:new Date(this.state.dateValue).getTime()})
			}
			work.sort(this.sortDate) 
			this.setState({work})
	}}

	deleteWork = (target) => {
		let work = this.state.work
		for(let i = 0; i< work.length; i++){
			if (work[i].id == target.value){
				work.splice(i,1)
			}

		}
		this.setState({work})
	}

	editWork = (target) => {
		let work = this.state.work
		
		console.log(work)
		for(let i = 0; i< work.length; i++){
			if (work[i].id == target.value){
				this.setState({dateValue:work[i].date.join('-'),lenValue:work[i].length})
			}
		}
		this.deleteWork(target)
		
	}

	render(){
		return(
			<div className="workout_wrapper">
				<div className="workout_input">
					<label htmlFor="date">
						Дата(ДД.ММ.ГГ)
						<input type="date" id="date" onChange={this.inputHandler} value={this.state.dateValue}/>
					</label>
					<label htmlFor="length">
					Пройдено км
						<input type="number" id="length" onChange={this.inputHandler} value={this.state.lenValue}/>
					</label>
					<button onClick={this.buttonHandler}>OK</button>
				</div>
				{this.state.work != false ? <div className="workout_print">
					<div className="workout_print__headers">
						<p>Дата(ДД.ММ.ГГ)</p>
						<p>Пройдено км</p>
						<p>Действия</p>
					</div>
					<div className="workout_print__info">
					{this.state.work.map((item,i)=>{
						return(
							<div className="workout-one" >
							<p>{item.date.join('.')}</p>
							<p>{item.length}</p>
							<div>
								<button value = {item.id} onClick={(e) => {this.editWork(e.target)}}>✎</button>
								<button onClick = {(e)=>{this.deleteWork(e.target)}}value = {item.id}>✘</button>
							</div>
						</div>
						)
					})}
					</div>
				</div> : null}
			</div>
			)
	}
}
