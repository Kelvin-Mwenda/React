import {useState, useEffect} from 'react'
import './digiclock.css'

function Digiclock(){
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
    },1000)

return () => clearInterval(intervalId)

}, [])

function formatTime(){
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    const meridiem = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12 || 12

    // Add leading zeros for single digit hours, minutes, and seconds
    if(hours < 10){
        hours = '0' + hours
    }
    if(minutes < 10){
        minutes = '0' + minutes
    }
    if(seconds < 10){
        seconds = '0' + seconds
    }

    // function padZero(number){
    //     return (number < 10 ? '0' : '') + number
    // }

    return `${hours}:${minutes}:${seconds} ${meridiem}`
}

    return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    )
}
export default Digiclock