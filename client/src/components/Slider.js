import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { useState, useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css'
import '../index.css'

const images = [
  "https://coconest.in/wp-content/uploads/2024/02/2.png",
  "https://coconest.in/wp-content/uploads/2024/02/3.png",
  "https://coconest.in/wp-content/uploads/2024/02/5-1.png"
];


function Slider() {

  const [assignees, setAssignee] = useState(0)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAssignee((prev) => (prev + 1)%3);
  //   }, 5000);
  // });

  const imageSliderRight = () => {
    setAssignee(prev => (prev + 1) % 3);
  }

  const imageSliderLeft = () => {
    (assignees - 1 < 0) ? setAssignee(2) : setAssignee(prev => (prev - 1) % 3)
  }

  return (
    <>
    <div style={{ backgroundImage: `url(${images[assignees]})` }} className="wt ease-in-out delay-1000 transition-colors min-h-screen max-h-screen bg-cover bg-center bg-no-repeat flex">
      <div className="flex place-content-center place-items-center w-screen justify-between">
        <span className="ml-10 hover:bg-opacity-80 hover:bg-[#ffa401] rounded-full hover:-translate-x-px border p-3 border-white hover:transition-all hover:ease-in-out "><GoArrowLeft size={20} color="white" onClick={imageSliderLeft} /></span>
        <div className='flex justify-center items-center flex-col text-white text-center'>
          <span className='flex py-5'><IoIosStar color="yellow"/><IoIosStar color="yellow"/><IoIosStar color="yellow" /><IoIosStar color="yellow"/><IoIosStar color="yellow"/></span>
          <p className='py-2 max-[570px]:text-3xl text-6xl font-mono'>{(assignees == 0 ? "PREMIUM FARM HOUSE" : (assignees == 1) ? "WELCOME TO" : "PREMIUM FARM HOUSE")}</p>
          <p className='py-2 max-[570px]:text-6xl text-8xl font-serif text-center'>{(assignees == 0 ? "Stay With Us, Feel" : (assignees == 1) ? "Coconest Eco" : "The Perfect Base")}</p>
          <p className='py-2 max-[570px]:text-6xl text-8xl font-serif'>{(assignees == 0 ? "At Home" : (assignees == 1) ? "Village" : "For You")}</p>
          <span className="py-3"><button className='py-2 max-w-80 border-[0.1px] border-collapse text-base p-5 hover:bg-orange-400'>BOOK YOUR STAY</button></span>
        </div>
        <span className="mr-10 hover:bg-opacity-80 hover:bg-[#ffa401] rounded-full hover:translate-x-px border p-3 border-white hover:transition-all hover:ease-in-out" onClick={imageSliderRight} ><GoArrowRight size={20} color="white" /></span>
      </div>
    </div>
    </>
  );
}

export default Slider;