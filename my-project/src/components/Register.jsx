import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-sky-600 w-[400px] md:w-[600px]  mx-auto  mt-5 '>

            <h1 className='text-center text-2xl text-white mt-2'>Signup Your Account</h1>

            <form className='space-y-2 text-center p-2'>
                <div className='mt-2 '>
                    <input type="text" name="name" className='w-[70%] text-center' placeholder="Your Name" />
                </div>
                <div className='mt-2 '>
                    <input type="text" name="photoUrl" className='w-[70%] text-center' placeholder="Photo Url" />
                </div>
                <div>
                    <input type="email" name="email" className='w-[70%]  text-center' placeholder="Your Email" required />
                </div>
                <div>
                    <input type="password" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <div>
                    <input type="password" name="conPassword" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <div className=" text-red-700 w-[60%] mx-auto  rounded-lg p-2 ">
                    
                </div>


                <button type="submit" className='btn'>Sign Up</button>
                <p className='text-white'>If you have already an account? please <NavLink to={'/login'}><span className='text-yellow-500 underline'>login</span></NavLink></p>

            </form>

            <hr />
            <div className='text-center space-y-2 p-2'>
                <h1 className='text-white'>Or Sign up with</h1>
                <div>
                    <button className='btn'>with google</button>
                </div>
                {/* <div>
                    <button className='btn btn-warning'>with github</button>
                </div> */}
            </div>

        </div>

    );
};

export default Register;