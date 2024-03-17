import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

import '../index.css'

const Footer = () => {

  return (
    <div className='h-auto bg-[#1b1b1b]'>
      <div className='flex flex-col flex-1 justify-evenly border-b-2 pb-16 flex-wrap sm:flex-row text-center'>
        <ul className="list-inside text-center">
          <li className=' listyle border-b-2 border-b-[#975621c0] text-base marker:text-amber-800 text-white -tracking-tighter pb-2 pt-2'>CONTACT US!</li>
        </ul>
        <div className=' flex flex-col'>
          <p className='text-amber-800 text-3xl font-medium font-serif pt-2 flex justify-center md:justify-start'>Get in touch</p>
          <p className='text-white tracking-normal text-base py-3 '>Thondamuthur, Pollachi, Tamil Nadu 642123</p>
          <p className='font-semibold text-white py-3 text-lg'>9942880006, 9751396396, 8098199000</p>
          <p className='text-white underline underline-offset-8 pt-3 flex justify-center md:justify-start'>coconest.in@gmail.com</p>
          <span className='flex pt-7 items-center justify-center md:justify-start'>
            <span className='pr-6 text-center'><CiFacebook size={40} className='' /></span> <FaInstagram size={36.5} />
          </span>
        </div>
        <div className=''>
          <p className='text-amber-800 text-3xl font-medium font-serif pt-2 '>Room & Suites</p>
          <ul className='marker:text-amber-800 tracking-tighter text-sm'>
            <li className='py-1 text-white'>2BHK Premium Villa</li>
            <li className='py-1 text-white'>2BHK Traditional Villa</li>
            <li className='py-1 text-white'>3BHK Traditional Villa</li>
            <li className='py-1 text-white'>2BHK Thottikattu Villa</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-evenly items-center flex-wrap text-center text-white h-[8vh]'>
        <p>© Copyright 2024 Coconest. Developed By Thewebroots</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer
