import React, { useEffect, useState } from 'react';
import DoctorDetails from './DoctorDetails';

const Doctor = () => {

    const [doctors,setDoctors]=useState([]);

    useEffect(()=>{
        fetch('./doctor.json')
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
            console.log(data)
        });
    },[]);
    
    
    

    return (
        <div >
            <br />
            <h1  className="mt-5">Doctor Details</h1>
            <div className="res">
            {
                doctors.map(doctor => <DoctorDetails
                    key = {doctor.key}
                    doctor={doctor}/>)
            }
            </div>
           
        </div>
    );
};

export default Doctor;