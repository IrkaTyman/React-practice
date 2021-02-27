import React from 'react'
import './Clock.css'

export const Clock = (props) => {


	const date = props.date
	const year = date.getFullYear()
	const month = date.getMonth()
	let dayWeek = new Date(year,month,1).getDay() == 0 ? 6 : new Date(year,month,1).getDay()- 1
	const maxDay = 32 - new Date(year,month,32).getDate()
	let days=[]

	function monthWord(num){
		let monthWord = ''

		switch (num){
			case 0: monthWord = 'Январь';
			break;
			case 1: monthWord = 'Февраль';
			break;
			case 2: monthWord = 'Март';
			break;
			case 3: monthWord = 'Апрель';
			break;
			case 4: monthWord = 'Май';
			break;
			case 5: monthWord = 'Июнь';
			break;
			case 6: monthWord = 'Июль';
			break;
			case 7: monthWord = 'Август';
			break;
			case 8: monthWord = 'Сентябрь';
			break;
			case 9: monthWord = 'Октябрь';
			break;
			case 10: monthWord = 'Ноябрь';
			break;
			case 11: monthWord = 'Декабрь';
			break;
		}

		return monthWord
	}

	function tdMade(){
		console.log(dayWeek,new Date(year,1,27).getDay())
		days = []
		if(dayWeek != 0){
		    for(let j = dayWeek; j > 0; j--){
		    console.log('last')	    	
		    	days.push(<td className='ui-datepicker-other-month'>{32 - new Date(2021,month-1,32).getDate()-j+1}</td>);		    
		    }
		    dayWeek = 0
		}

		for(let day = 1; day < maxDay + 1; day++){
			if(date.getDate() == day) days.push(<td className="ui-datepicker-today">{day}</td>)
			else days.push(<td>{day}</td>)
		}

		if(days.length % 7 != 0 || days.length< 36){
			const raznDay = 8 - days.length%7
			for(let nextDay = 1; nextDay < raznDay; nextDay++){
				console.log('next',nextDay)
				days.push(<td className='ui-datepicker-other-month'>{nextDay}</td>);		
			}	    
		}
		console.log(days)
		return days

	}

	tdMade()

	
	return(
		<div class="ui-datepicker">
		  <div class="ui-datepicker-material-header">
		    <div class="ui-datepicker-material-day">{new Intl.DateTimeFormat('ru-RU', {weekday:'long'}).format(date)}</div>
		    <div class="ui-datepicker-material-date">
		      <div class="ui-datepicker-material-day-num">{date.getDate()}</div>
		      <div class="ui-datepicker-material-month">{monthWord(month)}</div>
		      <div class="ui-datepicker-material-year">{date.getFullYear()}</div>
		    </div>
		  </div>
		  <div class="ui-datepicker-header">
		    <div class="ui-datepicker-title">
		      <span class="ui-datepicker-month">{monthWord(month)}</span>&nbsp;<span class="ui-datepicker-year">{date.getFullYear()}</span>
		    </div>
		  </div>
		  <table class="ui-datepicker-calendar">
		    <colgroup>
		      <col/>
		      <col/>
		      <col/>
		      <col/>
		      <col/>
		      <col class="ui-datepicker-week-end"/>
		      <col class="ui-datepicker-week-end"/>
		    </colgroup>
		    <thead>
		      <tr>
		        <th scope="col" title="Понедельник">Пн</th>
		        <th scope="col" title="Вторник">Вт</th>
		        <th scope="col" title="Среда">Ср</th>
		        <th scope="col" title="Четверг">Чт</th>
		        <th scope="col" title="Пятница">Пт</th>
		        <th scope="col" title="Суббота">Сб</th>
		        <th scope="col" title="Воскресенье">Вс</th>
		      </tr>
		    </thead>
		    <tbody>
		    <tr>
		    	{days[0]}
		    	{days[1]}
		    	{days[2]}
		    	{days[3]}
		    	{days[4]}
		    	{days[5]}
		    	{days[6]}
		    </tr>
		    <tr>
		    	{days[7]}
		    	{days[8]}
		    	{days[9]}
		    	{days[10]}
		    	{days[11]}
		    	{days[12]}
		    	{days[13]}
		    </tr>
		    <tr>
		    	{days[14]}
		    	{days[15]}
		    	{days[16]}
		    	{days[17]}
		    	{days[18]}
		    	{days[19]}
		    	{days[20]}
		    </tr>
		    <tr>
		    	{days[21]}
		    	{days[22]}
		    	{days[23]}
		    	{days[24]}
		    	{days[25]}
		    	{days[26]}
		    	{days[27]}
		    </tr>
		    <tr>
		    	{days[28]}
		    	{days[29]}
		    	{days[30]}
		    	{days[31]}
		    	{days[32]}
		    	{days[33]}
		    	{days[34]}
		    </tr>
		    <tr>
		    	{days[35]}
		    	{days[36]}
		    	{days[37]}
		    	{days[38]}
		    	{days[39]}
		    	{days[40]}
		    	{days[41]}
		    </tr>
		   
		    </tbody>
		  </table>
		</div>
		)
}
