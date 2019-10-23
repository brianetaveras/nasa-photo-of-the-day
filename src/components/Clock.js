import React, {useState} from 'react'


const Clock = (props)=>{

const [time, setTime] = useState('00:00')

const getTime = ()=>{
    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hour = date.getHours()
    setTime(`${hour}:${minutes}:${seconds}`) 
}

setInterval(getTime, 1000)
    return (
        <div className="clock-container">
            <h1>{time}</h1>
            <h2>{props.date}</h2>

        </div>
    )
}

export default Clock