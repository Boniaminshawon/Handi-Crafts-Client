import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {
    const { user, logOut } = UseAuth();
    return (
        <div>
            <div className="navbar bg-[#f9f7f2 font-primary text-white bg-[#faf7f2] bg-[#f9ede8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <NavLink to='/' className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e] font-bold  border' : ' font-semibold'}>
                                <button className="px-2  py-1 btn-ghost rounded  ">Home</button> </NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink to='/' className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e] font-bold  border' : ' font-semibold'}>
                            <button className="px-2  py-1 btn-ghost rounded  ">Home</button> </NavLink></li>

                    </ul>
                </div>



                <div className="navbar-end ">
                    {user ?

                        <div className="">
                            {/* for mobile */}
                            <div className="dropdown dropdown-bottom dropdown-hover dropdown-end text-black z-10">

                                <div tabIndex={0} role="button" className="w-12 tooltip   tooltip-info tooltip-left z-10 " data-tip={user.displayName || 'User Name not found'}>
                                    <img className="rounded-full h-[40px] w-[40px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                                </div>


                                <ul tabIndex={0} className="dropdown-content text-base font-bold text-white bg-[#00aeff] z-[1] menu  shadow rounded w-[200px]">

                                    <li className="hover:bg-[#004274]"><Link to={'/profile'}>Update Profile</Link></li>
                                    <hr />
                                    <li> <button onClick={logOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded  bg-[#00aeff] border-white hover:bg-[#004274] sm:text-lg ">Log Out</button></li>
                                    <hr />
                                </ul>
                            </div>

                            {/* for tablet and pc */}
                            {/* <div className="hidden  gap-2 md:flex">
                                <div className="w-12 tooltip   tooltip-info tooltip-bottom " data-tip={user.displayName || 'User Name not found'}>
                                    <img className="rounded-full h-[44px] w-[44px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                                </div>


                                <div>
                                    <button onClick={logOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded font-bold bg-[#00aeff] border-[#00aeff]  text-base sm:text-lg text-white">Log Out</button>
                                </div>
                            </div> */}

                        </div>
                        :
                        <Link to={'/login'}> <button className="py-1 sm:py-2 px-3 sm:h-[44px] font-bold rounded bg-[#00aeff] border-[#00aeff] text-base sm:text-lg text-white">Login</button></Link>
                    }
                </div>

                {/* <div className="navbar-end">
                    <Link to={'/login'} className="btn bg-[#a55e3f bg-[#b18b5e] bg text-white ">  Login</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;