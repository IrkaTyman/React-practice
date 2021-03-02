import React from 'react'

export const ProjectList = (props) => {
	
	let selected = props.selected
	let projects = selected == 'All' ? props.projects : props.projects.filter(item => item.category==selected)

	return (
		<div className="projects">
			<div className="column">
				{
					projects.map((item,i) => {
						if(i % 3 === 0){
							return <img src= {item.img}/>
						}
					})
				}
			</div>
			<div className="column">
				{
					projects.map((item,i) => {
						if(i % 3 === 1){
							return <img src= {item.img}/>
						}
					})
				}
			</div>
			<div className="column">
				{
					projects.map((item,i) => {
						if(i % 3 === 2){
							return <img src= {item.img}/>
						}
					})
				}
			</div>
		</div>
		)
}