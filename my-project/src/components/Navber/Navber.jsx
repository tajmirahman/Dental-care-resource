import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './/Navber.css'
import { authContext } from '../AuthProvider/AuthProvider';

const Navber = () => {

    const { handleLogout, user } = useContext(authContext);


    return (
        <div className='flex justify-between items-center bg-slate-400 min-h-20 mx-10 px-3 mt-6'>
            <div className='text-xl font-bold'>TEETH WIZARD</div>
            <div className='space-x-2 font-semibold'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/treatment'}>Treatments</NavLink>
                <NavLink to={'/appointment'}>Appointments</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                {
                    user && user?.email
                        ?
                        <button onClick={handleLogout} className='btn'>Logout</button>
                        :
                        <NavLink to={'/login'}><button className='btn bg-sky-500'>Login</button></NavLink>
                }

            </div>
        </div>
    );
};

export default Navber;