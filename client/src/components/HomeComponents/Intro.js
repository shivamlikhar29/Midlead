import React from 'react'

const Intro = () => {
  return (
    <div className=' w-full h-[60vh] bg-orange-50'>
      <div className='h-full bg-[#1b1b1b] hidden'>
        <div className='flex flex-col flex-1 justify-evenly border-b-2 pb-16 flex-wrap sm:flex-row text-center'>
          <ul className="list-inside text-center">
            <li className=' listyle border-b-2 border-b-[#975621c0] text-base marker:text-amber-800 text-white -tracking-tighter pb-2 pt-2'>CONTACT US!</li>
          </ul>
          <div className=' flex flex-col'>
            <p className='text-amber-800 text-3xl font-medium font-serif pt-2 flex justify-center md:justify-start'>Get in touch</p>
            <p className='text-white tracking-normal text-base py-3 '>Thondamuthur, Pollachi, Tamil Nadu 642123</p>
            <p className='font-semibold text-white py-3 text-lg'>9942880006, 9751396396, 8098199000</p>
            <p className='text-white underline underline-offset-8 pt-3 flex justify-center md:justify-start'>coconest.in@gmail.com</p>
          </div>
          <div className='bg-red-500'>
            <p className='text-amber-800 text-3xl font-medium font-serif pt-2 '>Room & Suites</p>
            <ul className='marker:text-amber-800 tracking-tighter text-sm'>
              <li className='py-1 text-white'>2BHK Premium Villa</li>
              <li className='py-1 text-white'>2BHK Traditional Villa</li>
              <li className='py-1 text-white'>3BHK Traditional Villa</li>
              <li className='py-1 text-white'>2BHK Thottikattu Villa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
