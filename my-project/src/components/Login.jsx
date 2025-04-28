
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';


const Login = () => {

    const { handleLogin } = useContext(authContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)

            .then(() => {
                navigate('/')
            })
            .catch(err => {
                setError(err.message)
            })

    }



    return (
        <div className='bg-sky-500 w-[400px] h-[300px] md:w-[600px]  mx-auto  mt-5 p-6'>

            <h1 className='text-center text-2xl text-white '>Login Your Account</h1>

            <form onSubmit={handleForm} className='space-y-4 text-center p-2 mt-6'>

                <div>
                    <input type="email" name="email" className='w-[70%]  text-center' placeholder="Your Email" required />
                </div>
                <div>
                    <input type="password" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <p className=" text-red-700 w-[60%] mx-auto ">
                    {
                        error && <p className='bg-white w-[50%] mx-auto'>{error.split('/')[1].slice(0, 18)}</p>
                    }
                </p>



                <button type="submit" className='btn'>Login</button>
                <p className='text-white'>If you have already an account? please <NavLink to={'/register'}><span className='text-black underline'>register</span></NavLink></p>

            </form>



        </div>
    );
};

export default Login;