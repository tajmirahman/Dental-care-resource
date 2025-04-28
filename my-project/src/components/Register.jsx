import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';

const Register = () => {

    const { handleRegister, handleUpdateUser, handleGoogleLogin } = useContext(authContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        if (password != conPassword) {
            setError('password does not match')
            return
        }

        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;

        if (!/[A-Z]/.test(password)) {
            setError('Must include at least one Uppdercase letter')
            return
        }
        if (!/[a-z]/.test(password)) {
            setError('Must include at least one lowercase letter');
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError('Must include at least one number');
            return;
        }
        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
            setError('Must include at least one special character');
            return;
        }


        handleRegister(email, password)
            .then(() => {
                handleUpdateUser(name, image)
                navigate('/')

            })
            .catch(err => console.log(err.message))

    }

    const handleGoogle = () => {
        handleGoogleLogin()
            .then(() => {
                navigate(from);
            })
    }


    return (
        <div className='bg-sky-500 w-[400px] md:w-[600px]  mx-auto  mt-5 '>

            <h1 className='text-center text-2xl text-white mt-2'>Signup Your Account</h1>

            <form onSubmit={handleForm} className='space-y-2 text-center p-2'>
                <div className='mt-2 '>
                    <input type="text" name="name" className='w-[70%] text-center' placeholder="Your Name" required />
                </div>
                <div className='mt-2 '>
                    <input type="text" name="photoUrl" className='w-[70%] text-center' placeholder="Photo Url" />
                </div>
                <div>
                    <input type="email" name="email" className='w-[70%]  text-center' placeholder="Your Email" required />
                </div>
                <div>
                    <input type="text" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <div>
                    <input type="password" name="conPassword" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <div className=" text-red-700 w-[60%] mx-auto  rounded-lg p-2 ">
                    {
                        error && <p className='text-red-500 bg-white w-[80%] mx-auto'>{error}</p>
                    }
                </div>


                <button type="submit" className='btn'>Sign Up</button>
                <p className='text-white'>If you have already an account? please <NavLink to={'/login'}><span className='text-black underline'>login</span></NavLink></p>

            </form>

            <hr />
            <div className='text-center space-y-2 p-2'>
                <h1 className='text-white'>Or Sign up with</h1>
                <div>
                    <button onClick={handleGoogle} className='btn'>with google</button>
                </div>
                {/* <div>
                    <button className='btn btn-warning'>with github</button>
                </div> */}
            </div>

        </div>

    );
};

export default Register;