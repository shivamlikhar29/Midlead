import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { IoIosStarOutline } from "react-icons/io";
import { useState, useEffect   } from 'react';
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
  //   }, 2000);
  // });

  const imageSliderRight = () => {
    setAssignee(prev => (prev + 1) % 3);
  }

  const imageSliderLeft = () => {
    (assignees - 1 < 0) ? setAssignee(2) : setAssignee(prev => (prev - 1) % 3)
  }

  return (
    <div style={{ backgroundImage: `url(${images[assignees]})` }} className="wt ease-in-out delay-1000 transition-colors min-h-screen max-h-screen bg-cover bg-center bg-no-repeat flex">
      <div className="flex place-content-center place-items-center w-screen justify-between">
        <span className="ml-10 hover:bg-opacity-25 hover:bg-orange-500 rounded-full hover:-translate-x-px"><SlArrowLeftCircle size={50} onClick={imageSliderLeft} /></span>
        <div className='flex justify-center items-center flex-col text-white'>
          <span className='flex py-5'><IoIosStarOutline className='' /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></span>
          <p className='py-2 text-6xl font-mono'>WELCOME TO</p>
          <p className='py-2 text-8xl font-serif'>Coconest Eco</p>
          <p className='py-2 text-8xl font-serif'>Village</p>
          <button className='py-2 max-w-80 border border-collapse text-base p-5 hover:bg-orange-400'>BOOK YOUR STAY</button>
        </div>
        <span className="mr-10 hover:bg-opacity-25 hover:bg-orange-500 rounded-full hover:translate-x-px" onClick={imageSliderRight} ><SlArrowRightCircle size={50} /></span>
      </div>
    </div>
  );
}

export default Slider;