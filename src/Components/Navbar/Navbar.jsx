import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {
    const { user, logOut } = UseAuth();
    return (
        <div>
            <div className="navbar fixed z-10 bg-[#f9f7f2 font-primary text-white bg-[#faf7f2] bg-[#f9ede8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <NavLink to='/' className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e] text-lg font-semibold  ' : 'text-black font-semibold'}>
                                <button className="px-2  py-1 text-lg  rounded  ">Home</button> </NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink to='/' className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border border-[#b18b5e] font-semibold'}>
                            <button className="px-1 text-lg  rounded  ">Home</button> </NavLink></li>

                    </ul>
                </div>



                <div className="navbar-end ">
                    {user ?

                        <div className="">

                            <div className="dropdown dropdown-bottom dropdown-hover dropdown-end text-black z-10">

                                <div tabIndex={0} role="button" className="w-12 tooltip   tooltip-info tooltip-left z-10 " >
                                    <img className="rounded-full h-[44px] w-[44px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                                </div>

                                
                                <ul tabIndex={0} className="dropdown-content text-base font-semibold text-white bg-[#b18b5e] z-[1] menu  shadow rounded w-[200px]">

                                <li>Name: { user.displayName || 'User Name not found'} </li>
                                    <hr />
                                    <li> <button onClick={logOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded  bg-[#b18b5e] border-white hover:bg-[#004274] sm:text-lg ">Log Out</button></li>
                                    <hr />
                                </ul>
                            </div>

                        </div>
                        :

                        <div>
                            <Link to={'/register'}> <button className="py-1 text-xl sm:py-2 px-3 sm:h-[44px] font-semibold rounded bg-[#b18b5e] btn  sm:text-lg text-white">Registration</button></Link>
                            <Link to={'/login'}> <button className="py-1  text-lg sm:py-2 px-3 sm:h-[44px] font-semibold rounded bg-[#b18b5e] btn  sm:text-lg text-white">Login</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;