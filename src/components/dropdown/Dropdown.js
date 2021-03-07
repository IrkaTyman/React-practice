import React,{useState} from 'react'
import {DropdownList} from './DropdownList'
import './Dropdown.css'
import img from "../../image/worldwide.svg"

export const Dropdown = () => {
	const [drop, setDrop] = useState({items:['Profile Informatio',
											'Change Pasword',
											'Become PRO',
											'Help',
											'Log Out'],
									listView:true});

	function dropListHandler(){
		setDrop({listView:!drop.listView, items:drop.items})

		document.querySelector('.dropdown-wrapper').classList.toggle('open')
	}

	function dropItemHandler(el){
		let liActive =document.querySelector('a.active')
		if(liActive) liActive.classList.remove('active')
		el.classList.add('active')

	}

	return(
		<div className="containerDrop" onClick={(e)=>{if(!drop.listView && e.target.className == 'containerDrop') dropListHandler()}}>
			<div className = 'dropdown-wrapper ' >
				<button className="btn" onClick = {dropListHandler}>Account setting <img src={img} alt="planet" className="material-icons"/> </button>
				<DropdownList visible={drop.listView} list = {drop.items} dropItemHandler={dropItemHandler}/>
			</div>
		</div>
		
		)
}