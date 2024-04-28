import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import UseAuth from "./Hooks/UseAuth";


const Login = () => {
    const { signIn } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        resetField,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)

            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const userInfo = { name, email };

                if (user) {
                    navigate(location?.state || '/')
                }

                fetch('http://localhost:5000/user',{
                    method:'post',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userInfo)
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result);
                })

            })

            .catch(error => {
                console.log(error);
                setLoginError(error)
            });

        resetField('email');
        resetField('password');


    };

    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/cL7PPK0/maxresdefault-11.jpg")' }} className="bg-opacity-100 flex justify-center bg-no-repeat bg-center bg-cover ">

            <div className="md:hero  w-full lg:min-h-screen  g-base-200">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0 p-0 w-full lg:w-[450px] shadow-2xl bg-base-100 opacity-90">

                        <div className="text-center ">
                            <h1 className="md:text-4xl text-[28px] mt-5 font-bold">Login now!</h1>
                            {
                                loginError && <div className=" border-2 animate__animated animate__backInDown mx-6 mt-6 bg-[#ffebe8] py-3 border-[#dd3c10] rounded text-center">
                                    <h1 className="md:text-xl text-lg font-semibold">Wrong credentials</h1>
                                    <p className="md:text-lg text-base font-medium">Invalid email or password</p>

                                </div>
                            }
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered"
                                    {...register("email")}
                                />

                            </div>
                            <div className="form-control relative ">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered"
                                    {...register("password")}
                                />
                                <span className="text-2xl absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }

                                </span>
                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="bg-[#b18b5e] text-white font-bold btn hover:bg-[#004274] text-lg" value="Login" />
                            </div>
                        </form>
                        <div className="pl-8 pb-7 font-primary font-medium text-lg text-center md:text-xl">
                            <p>Don't have account? Please <Link className="underline text-[#aa7434] font-semibold text-xl md:text-2xl" to={'/register'}>Register</Link></p>
                        </div>
                        <hr />
                        <div className="font-primary md:text-xl text-lg text-center mt-3 mb-7 font-bold">
                            <p className="text-[#aa7434]"> Continue with Social login</p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;