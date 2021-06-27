import {React, useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import API_patient from '../api/API_patient';
import Patient from '../classes/Patient';
import BigCalendar from './BigCalendar';
import Button from '@material-ui/core/Button';
import { Row } from '@mui-treasury/components/flex';
import Typography from '@material-ui/core/Typography';

var homestyle = {
    btnCreate: {
        backgroundColor: "#F95F62",
        marginLeft: "auto",
        marginRight: "20px"
    },
    calendar: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",

    }, 
    titles: {
        margin: 'auto',
        fontSize: '30px',
        fontStyle: 'italic',
        color: '#616161'
    }
}


export default function Home({user}){
    const [patient,setPatient] = useState(new Patient())
    const history = useHistory()
    const [showMeeting,setShowMeeting] = useState(false)
    const [meetingURL,setMeetingURL] = useState("")
    
    const gotoNewAppointment = () =>{
      history.push('/newAppointment');
    }

    useEffect(() => {
        if(user.userType === "unknown"){
            console.log("go to firstAccess")
            history.push("/firstAccess")
        }
        if(user.userType === "Patient"){
            API_patient.getPatient(user.googleId)   //if Patient
                .then((p) =>{
                    setPatient(p)
                    if(p.doctorId === undefined || p.doctorId === ""){
                        history.push("/patient/selectDoctor")
                    }
                })
                .catch((err) =>{
                    console.log(err)
                })
        }
    },[user.userType,patient.doctorId, history, user.googleId]) 


    return(
        <>
            <Typography variant="h5" style={homestyle.titles}>My Appointments</Typography>
            {user.userType === 'Patient' &&
                <Row gap={2} p={2.5}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={homestyle.btnCreate}
                        onClick={() => gotoNewAppointment()}
                    >
                        New Appointment
                    </Button>
                </Row>
            }
            <Row gap={2} p={2.5}>
                <div style={homestyle.calendar}>
                    <BigCalendar user={user} defaultView="week"/>
                </div>
            </Row>
        </>
    )
}