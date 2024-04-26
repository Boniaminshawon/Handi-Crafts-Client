

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import 'animate.css';

import { useState } from "react";
import swal from 'sweetalert';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import UseAuth from "./Hooks/UseAuth";



const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } =UseAuth();
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField
    } = useForm()

    const onSubmit = (data) => {

        const { email, password} = data;

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lowercase character.');
            return;
        }

        setRegisterError('');

        createUser(email, password)
            .then(result => {
                swal("Wow!", "Registered successfully! You have to login now ", "success");
                const user = result.user;

              


                setTimeout(() => {
                    if (user) {
                        navigate('/login')
                    }
                }, 2000);
            })

            .catch(error => {
                swal("Oops!", "Your email already have used!", "error");
                console.log(error);
            });

        resetField('email')
        resetField('password')
        resetField('photo')
        resetField('name')


    };

    return (
    
        <div style={{backgroundImage:'url("https://i.ibb.co/Bt9HWCD/maxresdefault-13.jpg")'}} className=" flex justify-center ">
          
            <div className="md:hero w-full lg:min-h-screen b-base-200">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0 lg:w-[450px] w-full shadow-2xl opacity-90 bg-base-100">
                        <div className="text-center ">
                            <h1 className="md:text-4xl text-[28px] mt-5 font-bold">Register now!</h1>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered"
                                    {...register("image", { required: true })}
                                />
                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input  input-bordered"
                                    {...register("password", { required: true })}
                                />
                                <div className="relative">
                                    <span className="text-2xl absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }

                                    </span>
                                </div>

                                {registerError && <p className="text-red-500  font-primary text-lg mt-1">{registerError}</p>}

                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="bg-[#b18b5e] text-white font-bold btn hover:bg-[#004274] text-lg" value="Register" />
                            </div>
                        </form>
                        <div className="md:px-8 px-4 pb-7 font-primary text-center font-medium text-lg md:text-xl">
                            <p>Already have account? Please <Link className="underline text-[#aa7434] font-semibold text-xl md:text-2xl" to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;