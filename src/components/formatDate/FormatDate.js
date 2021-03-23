import React, {useState} from 'react';
import './FormatDate.css'

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(props){
    let minute = (Date.now() - new Date(props.date).getTime())/1000/60
    let dateStr = ''

    if(minute > 1440){
        dateStr = `${parseInt(minute/60/24)} дней назад`
    } else if(minute < 60){
        dateStr = `${parseInt(minute)} минут назад`
    } else {
        dateStr = `${parseInt(minute/60)} часов назад`
    }

    return(
        <DateTime date = {dateStr} />
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map((item,i) => <Video url={item.url} date={item.date} key = {i}/>);
}

export const FormatDate = () => {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-03-23 16:43:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
    <div id="rootDate">
        <VideoList list={list} />
    </div>
    );
}