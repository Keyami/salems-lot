import React from 'react'
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { input } from 'react-validation/build/input'
import '../App.css'

 function FormInformation(){
    const [sessionId, setSessionid] = React.useState()
    const [sessionDate, setSessionDate] = React.useState()
    const [roomNumber, setRoomNumber] = React.useState()
    const [sessionTime, setSessiontime] = React.useState()
    return (
    <Form>
        <div className='sessionID'>
        <label className='fontColor' for="sessionid">Session ID</label>
        <input class="form-control w-75" type="text" id='sessionid' name='sessionid' />
        </div>

        <div className='sessionDate'>
        <label className='fontColor' for="sessiondate">Session Date</label>
        <input class="form-control w-25" type="date" id='sessiondate' name='sessiondate' />
        </div>

        <div className='RoomNumber'>
        <label className='fontColor' for="roomnumber">Testing Room Number</label>
        <input class="form-control w-25" type="text" id='roomnumber' name='roomnumber' />
        </div>

        <div className='sessionTime'>
        <label className='fontColor' for="sessiontime">Session Time</label>
        <input class="form-control w-25" type="time" id='sessiontime' name='sessiontime' />
        </div>
    </Form>
)}

export default FormInformation;