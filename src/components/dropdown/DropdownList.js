import React from 'react'
import {DropdownItem} from './DropdownItem'

export const DropdownList = (props) => {
	return(
		<div className = "dropdown">
			<ul>
				{	
					props.list.map((item,i) =>{
					return(
						<DropdownItem key={i} value={item} click={props.dropItemHandler}/>
						)
				})}
			</ul>
		</div>
		)
}