import React from 'react'
import {LinkBig} from '../general/LinkBig'

export const LinkSearch = (props) => {
	return(
		<div className="linkSearch">
			{props.linkSearch.map((item,i) => {
				return <a href="#" key = {`search${i}`}>{item}</a>
			})}
		</div>
		)
}