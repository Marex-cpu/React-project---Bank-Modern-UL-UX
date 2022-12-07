import React, { useState } from 'react';
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants/texts';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => {
         return (
           <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
         ) 
        })}
      </ul>

      {/* nav-bar on small screen */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-8 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
          <ul className='list-none flex-col text-center items-center flex-1'>
            {navLinks.map((nav, index) => {
              return (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-5'} text-white`}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ) 
            })}
          </ul>
        </div>
      </div>

    </nav>
  ) 
}

export default Navbar