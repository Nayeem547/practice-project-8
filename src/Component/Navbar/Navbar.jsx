import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from './logo';
const Navbar = () => {
    return (
        <div className=''>
            <nav className=' flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center py-7 px-12 max-w-[1300px] mx-auto '>
              <Logo></Logo>
                <ul className='flex mt-5 md:mt-0 lg:mt-0 gap-6 '>
     <li>
            <NavLink
         to="/"
         className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? " text-[#FF444A] underline " : ""
        }
            >
             Home
             </NavLink>
                    </li>

     <li>
            <NavLink
         to="/Donation"
         className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? " text-[#FF444A] underline " : ""
        }
            >
             Donation
             </NavLink>
                    </li>

    <li>
            <NavLink
         to="/Statistics"
         className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? " text-[#FF444A] underline " : ""
        }
            >
             Statistics
             </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;