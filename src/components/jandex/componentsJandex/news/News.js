import React from 'react'
import {ListNews} from './ListNews'
import {ListLink} from './ListLink'

export const News = (props) => {
	return(
		<div>
		<ListLink links = {props.links} date ={props.date}/>
		<ListNews news={props.news}/>
		</div>
		)
}