import React from 'react'
import {OneNews} from './OneNews'

export const ListNews = (props) => { 
	return(
		<div className="listNews">
		{ props.news.map((item,i) => {
			return <OneNews text={item} key = {i}/>
		})}
		</div>
			
		)
}