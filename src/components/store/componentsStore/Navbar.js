import React from 'react';

export const Navbar = (props) => {
	return(
		<div className="navbarStore">
			<a href="#" onClick = {() => props.navbarHandler('home')}>Главная</a>
			<a href="#" onClick = {() => props.navbarHandler('likes')}>Избранное</a>
			<a href="#" onClick = {() => props.navbarHandler('card')}>Корзина</a>
		</div>
		)
}