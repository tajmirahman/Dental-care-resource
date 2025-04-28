import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import AppointmentCard from '../AppointmentCard';

const AllAppointment = () => {

    const {user}=useContext(authContext);
    const [saveStorage,setsaveStorage]=useState([])
    
    useEffect(()=>{
        let saveData=[];
    const localData=localStorage.getItem('appointments');
    if(localData){
        saveData=JSON.parse(localData);
    }
     
    const userData=saveData.filter(data=> data.email === user?.email)
    setsaveStorage(userData);

    },[user?.email])

    return (
        <div className='space-y-4 mt-6'>
            {
                saveStorage.map((data,index)=> <AppointmentCard key={index} data={data} index={index}></AppointmentCard>)
            }
        </div>
    );
};

export default AllAppointment;