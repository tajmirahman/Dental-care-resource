
import { NavLink } from 'react-router-dom';


const Login = () => {



    return (
        <div className='bg-sky-500 w-[400px] h-[300px] md:w-[600px]  mx-auto  mt-5 p-6'>

            <h1 className='text-center text-2xl text-white '>Signup Your Account</h1>

            <form className='space-y-4 text-center p-2 mt-6'>
                
                <div>
                    <input type="email" name="email" className='w-[70%]  text-center' placeholder="Your Email" required />
                </div>
                <div>
                    <input type="password" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
               
                


                <button type="submit" className='btn'>Sign Up</button>
                <p className='text-white'>If you have already an account? please <NavLink to={'/register'}><span className='text-black underline'>register</span></NavLink></p>

            </form>



        </div>
    );
};

export default Login;