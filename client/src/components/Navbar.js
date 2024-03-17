import React from 'react'
import { useState, useEffect } from 'react';


const mainLogo = "https://coconest.in/wp-content/uploads/2024/02/coconestlo.png"
const stickyLogo = "https://coconest.in/wp-content/uploads/2024/02/coconest-1.png"



const Navbar = () => {
  const [user, setUser] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navBackground, setNavBackground] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 100) {
      // Change the scroll threshold as needed
      setNavBackground('bg-white'); // Change background color when scrolled
    } else {
      setNavBackground(''); // Reset background color when not scrolled
    }
  }, [scrollY])
  return (
    <>
      <div className='fixed top-0 left-0 z-10'>
        <div className={`pt-3 w-screen transition ease-in-out delay-150 h-[9vh] animate-fade ${navBackground}`}>
          <div className='flex items-center justify-center flex-row'>
            <ul className='inline-flex items-center justify-center list-none'>
              <li className='px-14 pr-60'><img className='w-auto h-14' src={(navBackground == "bg-white") ? stickyLogo : mainLogo} alt='searchbar' /></li>
            </ul>
            <ul className={`inline-flex justify-center items-center text-base list-none ${(navBackground == "bg-white") ? "text-black" : "text-white"}`}>
              <li className='px-3 cursor-pointer hover:text-amber-800'>About</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Home</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Villas</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Activities</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Packages</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Purchases</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Villas</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Gallery</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>Contact</li>
              <li className='px-3 cursor-pointer hover:text-amber-800'>BOOK NOW</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )

}

export default Navbar