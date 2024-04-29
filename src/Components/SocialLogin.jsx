import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "./Hooks/UseAuth";


const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const userInfo = { name, email };


                if (user) {
                    navigate(location?.state || '/')
                }


                fetch(' https://handi-crafts-server-l5ehf362r-boni-amin-shawons-projects.vercel.app/user', {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                    })
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