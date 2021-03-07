import React from 'react'

export const DropdownItem= (props) => {
	return(
		<li key = {props.key} onClick = {(e)=>props.click(e.target)}>
			<a href="" onClick = {(e) => e.preventDefault()}>
				{props.value}
			</a>
		</li>
		)
}