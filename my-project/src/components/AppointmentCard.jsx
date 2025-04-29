import React from 'react';

const AppointmentCard = ({ data, index }) => {
    const { address, appointmentDate, email, name, phone, treatment } = data;
    return (
        <div className="card card-dash bg-base-100 w-[50%] mx-auto border-2 border-sky-600 ">
            <div className="card-body text-center">
                <h2 >Appointment #{index + 1}</h2>
                <h1 className='text-xl font-bold'>Treatment- {treatment} </h1>
                <h2 className='text-xl'><span >Name</span>- {name}</h2>
                <p className='text-xl'><span >Email</span>- {email}</p>
                <p className='text-xl'><span >Phone</span>- {phone}</p>
                
                <p className='text-xl'><span>Date</span>- {appointmentDate}</p>
                <p className='text-xl'><span>Address</span>- {address}</p>

            </div>
        </div>
    );
};

export default AppointmentCard;