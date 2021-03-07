import React from 'react';


export const IconSwitch = (props) => {

	return(
		<div className="icon">
			<img src={props.img} alt="" onClick={props.click}/>
		</div>
		)
}