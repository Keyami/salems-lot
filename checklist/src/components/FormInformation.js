import React from 'react'
import { input } from 'react-validation/build/input'
import '../App.css'

 function FormInformation(){
    const [sessionId, setSessionid] = React.useState()
    const [sessionDate, setSessionDate] = React.useState()
    const [roomNumber, setRoomNumber] = React.useState()
    const [sessionTime, setSessiontime] = React.useState()
    return (
    <form>
        <div className='sessionID'>
        <label className='fontColor' for="sessionid">Session ID</label>
        <input type="text" id='sessionid' name='sessionid' />
        </div>

        <div className='sessionDate'>
        <label className='fontColor' for="sessiondate">Session Date</label>
        <input type="date" id='sessiondate' name='sessiondate' />
        </div>

        <div className='RoomNumber'>
        <label className='fontColor' for="roomnumber">Testing Room Number</label>
        <input type="text" id='roomnumber' name='roomnumber' />
        </div>

        <div className='sessionTime'>
        <label className='fontColor' for="sessiontime">Session Time</label>
        <input type="time" id='sessiontime' name='sessiontime' />
        </div>
    </form>
)}

export default FormInformation;