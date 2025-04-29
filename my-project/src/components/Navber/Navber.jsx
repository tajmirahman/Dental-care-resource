import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './/Navber.css'
import { authContext } from '../AuthProvider/AuthProvider';
import image from '../../assets/images.png'

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

            <div className='flex justify-center items-center gap-3'>
                <div>
                    {
                        user && user?.email
                            ?
                            <div className='flex justify-center items-center gap-2'>
                                <img className='w-10 h-10 rounded-full' src={image} alt="" />
                                <p className='font-bold'>{user.displayName}</p>
                            </div>
                            :
                            ''
                    }
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
        </div>
    );
};

export default Navber;