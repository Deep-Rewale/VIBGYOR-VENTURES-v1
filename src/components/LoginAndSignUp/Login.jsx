import React, { useState } from 'react'
import LoginImg from "../../assets/loginAndSignup/Login/login.jpg"
import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom';


const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    // For Status
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(null)

    // for handling the changes

    const handleChanges = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value,
        });
    };

    //  validate email
    const ValidateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !login.email || login.password
        ) {
            setStatus({ type: "error", message: "please fill all  required fields" });
            setLoading(false)
            return;
        }

        if (!ValidateEmail(login.email)) {
            setStatus({
                type: "error",
                message: "Please enter a valid email address",
            });

            setLoading(false)
            return;
        }

        // reset form data

        setLogin({
            email: "",
            password: "",
        });

    }




    return (
        <section className='min-h-screen relative overflow-x-hidden bg-gradient-to-br from-[#5a4be7] via-[#7b6df2] to-[#c9c3ff]'>
            <div className='absolute lg:hidden top-20 left-10'>
            <Link to={"/"}><button className='bg-[#ede7f6]  rounded-2xl cursor-pointer p-3 '><SlArrowRight className='rotate-180 ' size={30} /></button></Link>
            </div>
            {/* full container */}
            <div className=' grid max-lg:place-items-center max-lg:min-h-screen max-lg:justify-center lg:grid-cols-2'>
                {/* left image  */}
                <div className='relative h-screen w-full overflow-hidden max-lg:hidden '>
                    <div className='absolute z-10 left-16 top-10 ' ><Link to={"/"}><button className='bg-[#ede7f6]  rounded-2xl cursor-pointer p-3 '><SlArrowRight className='hover:rotate-180 transition-all delay-50' size={30} /></button></Link></div>
                    <div className="text z-10 absolute top-1/2 -translate-y-1/2 left-16">
                        <h1 className="text-5xl  font-bold text-white mb-4">Welcome Back</h1>
                        <p className="text-lg text-gray-300 max-w-md font-semibold">
                            We're glad to see you again. Log in to continue your journey with us.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/45"></div>
                    <img className='h-full w-full   object-cover' loading='lazy' src={LoginImg} alt="Login" />
                </div>

                {/* right login form */}
                <div className='flex justify-center items-center text-center flex-col' >
                    <form className='bg-[#ede7f6] rounded-xl shadow-2xl max-sm:w-[340px] max-lg:w-[580px] lg:w-[500px] px-6 py-8 ' action="" onSubmit={handleSubmit}>
                        <div className='space-y-3'>
                            <h1 className='text-3xl lg:text-4xl font-bold text-primary font-heading capitalize'>sign in</h1>
                            <h2 className='text-md lg:text-lg text-primary-dark'>Sign in with Email & Password</h2></div>
                        <div className='flex flex-col space-y-3 lg:space-y-5 mt-5'>
                            <input className='p-3 lg:p-4  bg-white outline-none text-md lg:text-lg rounded-xl' type="email" placeholder='Enter E-mail' name='email' value={login.email} onChange={handleChanges} />
                            <input className='p-3 lg:p-4 bg-white outline-none text-md lg:text-lg rounded-xl' type="password" placeholder='Enter password' name='password' value={login.password} onChange={handleChanges} />
                        </div>
                        <div className='space-y-3 mt-5'>
                            <button className='bg-primary-dark p-5 text-[#ede7f6] text-md lg:text-lg font-semibold w-full uppercase rounded-xl shadow-md cursor-pointer'>sign in</button>
                            <div className='flex  justify-around text-md text-primary-dark'>
                               <Link to={"/signUp"}>Create account</Link>
                                <Link >forget password?</Link>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Login