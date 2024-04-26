import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "./Hooks/UseAuth";


const SocialLogin = () => {
    const {googleSignIn,githubSignIn}= UseAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(location?.state || '/')
                }
            })
    }
    return (
        <div className="flex justify-around text-white mt-5">
            <button onClick={() => handleSocialLogin(googleSignIn)} className="flex items-center gap-2  px-3 py-1 rounded-md hover:bg-[#aa7434] bg-green-800">
                <FaGoogle></FaGoogle>Google
            </button>
            <button onClick={() => handleSocialLogin(githubSignIn)} className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-[#aa7434] bg-black">
                <FaGithub></FaGithub>Github
            </button>
        </div>
    );
};

export default SocialLogin;