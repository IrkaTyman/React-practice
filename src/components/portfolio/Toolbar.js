import React from 'react'

export const Toolbar = (props) => {
	let filters = props.filters;

	return(
		<div className='toolbar'>
			{filters.map((item,i) => {
				return <button key={i} 
							   value={item}
							   onClick={props.click}>{item}</button>			
			})}
		</div>
		)
}