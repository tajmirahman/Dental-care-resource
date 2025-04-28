import React from 'react';

const AppointmentCard = ({data,index}) => {
    const { address, appointmentDate, email,name, phone } = data;
    return (
        <div className="card card-dash bg-base-100 w-[50%] mx-auto border-2 border-sky-600 ">
            <div className="card-body text-center">
            <h2 className='text-xl font-bold'>Appointment #{index + 1}</h2>
                <h2 className='text-xl'><span className=' font-bold'>Name</span>- {name}</h2>
                <p className='text-xl'><span className=' font-bold'>Email</span>- {email}</p>
                <p className='text-xl'><span className=' font-bold'>Phone</span>- {phone}</p>
                <p className='text-xl'><span className=' font-bold'>Date</span>- {appointmentDate}</p>
                <p className='text-xl'><span className=' font-bold'>Address</span>- {address}</p>
            
            </div>
        </div>
    );
};

export default AppointmentCard;