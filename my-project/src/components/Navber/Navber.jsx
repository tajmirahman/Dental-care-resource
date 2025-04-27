import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='flex justify-between items-center bg-slate-400'>
            <div>TEETH WIZARD</div>
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/treatment'}>Treatments</NavLink>
                <NavLink to={'/appointment'}>Appointments</NavLink>
            </div>
            <div>
                <button className='btn bg-sky-500'>Login</button>
            </div>
        </div>
    );
};

export default Navber;