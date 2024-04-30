import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useEffect, useState } from "react";


const Navbar = () => {
    const { user, logOut } = UseAuth();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)

    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }

    }
 
    return (
        <div>
            <div className="navbar fixed z-10 bg-[#f9f7f2 font-primary text-white                bg-[#faf7f2 bg-[#F8F5EF bg-[#ede6d8 bg-[#F6F1E7]">
                <div className="navbar-start text-black">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 space-y-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <NavLink to='/' className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e] text-lg font-semibold  ' : 'text-black font-semibold'}>
                                <button className="px-2  py-1 text-lg  rounded  ">Home</button> </NavLink>
                            </li>
                            <li> <NavLink to={'/allCrafts'} className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border bg-gray-200 border-[#b18b5e] font-semibold'}>
                                <button className=" text-lg  rounded  "> All Art & craft</button> </NavLink>
                            </li>
                            <li> <NavLink to={'/addCraft'} className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border bg-gray-200 border-[#b18b5e] font-semibold'}>
                                <button className=" text-lg  rounded  ">Add Craft</button> </NavLink>
                            </li>

                            <li> <NavLink to={'/myCraft'} className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border bg-gray-200 border-[#b18b5e] font-semibold'}>
                                <button className=" text-lg  rounded  ">My Art & Craft</button> </NavLink>
                            </li>

                        </ul>
                    </div>
                    <Link to={'/'} className="xl:pl-4  font-extrabold text-[#b18b5e] font-heading text-lg md:text-2xl xl:text-[28px]">HANDI<span className="text-black">CRAFT</span></Link>
                  
                </div>



                <div className="navbar-center hidden lg:flex">
                    <ul className="menu lg:space-x-3 xl:space-x-6  menu-horizontal px-1">
                        <li> <NavLink to='/' className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border bg-gray-200 border-[#b18b5e] font-semibold'}>
                            <button className=" text-lg  rounded  ">Home</button> </NavLink>
                        </li>

                        <li> <NavLink to={'/allCrafts'} className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border bg-gray-200 border-[#b18b5e] font-semibold'}>
                            <button className=" text-lg  rounded  "> All Art & craft</button> </NavLink>
                        </li>

                        <li> <NavLink to={'/addCraft'} className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border bg-gray-200 border-[#b18b5e] font-semibold'}>
                            <button className=" text-lg  rounded  ">Add Craft</button> </NavLink>
                        </li>

                        <li> <NavLink to={'/myCraft'} className={({ isActive }) => isActive ? 'rounded bg-[#b18b5e]  font-semibold' : 'text-black border bg-gray-200 border-[#b18b5e] font-semibold'}>
                            <button className=" text-lg  rounded  ">My Craft</button> </NavLink>
                        </li>

                    </ul>
                </div>



                <div className="navbar-end ">
                <label className="flex cursor-pointer gap-2 text-black mr-1 md:mr-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>

                        <input
                            onChange={handleToggle}
                            type="checkbox" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                  
                    {user ?

                        <div className="">

                            <div className="dropdown dropdown-bottom dropdown-hover dropdown-end text-black z-10">

                                <div tabIndex={0} role="button" className="w-12 tooltip   tooltip-info tooltip-left z-10 " >
                                    <img className="rounded-full h-[44px] w-[44px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                                </div>


                                <ul tabIndex={0} className="dropdown-content text-sm sm:text-lg font-semibold text-white bg-[#b18b5e] z-[1] menu  shadow rounded w-[100px] md:w-[200px]">

                                    <li className="">{user.displayName || 'User Name not found'} </li>
                                    <hr />
                                    <li> <button onClick={logOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded  bg-[#b18b5e] border-white hover:bg-[#004274]  ">Log Out</button></li>
                                    <hr />
                                </ul>
                            </div>

                        </div>
                        :

                        <div className="space-x-2 flex">
                         <div className="hidden md:flex">
                         <Link to={'/register'} className=""> <button className=" py-1 text-sm sm:py-2 px-3 sm:h-[44px] font-semibold rounded bg-[#b18b5e] btn  xl:text-lg md:text-base text-white">Sign Up</button></Link>
                         </div>
                           <div>
                           <Link to={'/login'}> <button className="md:py-1  py-[5px] text-sm sm:py-2 px-3 sm:h-[44px] font-semibold rounded bg-[#b18b5e] btn  xl:text-lg md:text-base text-white">Login</button></Link>
                           </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;