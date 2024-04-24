import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
  
      // Add or remove the class on the body
      if (!isModalOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    };
  
  return (
    <div className='w-full  md:px-[10rem] bg-gray-100' id='top'>
        <div className='flex w-full justify-between items-center py-[3rem] px-[1rem]'>
            <Link to={'/'}>
                <h1>Task Duty</h1>
            </Link>

            <ul className=' hidden md:flex gap-[2rem]'>
                <Link to={'/NewTask'}>
                    <li>New Task</li>
                </Link>
                <Link to={'/AllTask'}>
                    <li>All Task</li>
                </Link>
            </ul>
            <div className='relative -top-2 block md:hidden' onClick={toggleModal}>
                <div className='w-[2rem] absolute border top-0 right-[.5rem] border-black '></div>
                <div className='w-[2rem] absolute border top-2 right-[.5rem] border-black '></div>
                <div className='w-[2rem] absolute border top-4 right-[.5rem] border-black '></div>
            </div>
        </div>
        {isModalOpen && (
            <div className=" bg-white grid justify-start items-start md:hidden">
                <ul className='px-[1rem] py-[2rem]'>
                    <Link to={'/NewTask'}>
                        <li className="pb-[rem] text-[24px]">New Tasks</li>
                    </Link>
                    <Link to={'/AllTask'}>
                        <li className="pb-[rem] text-[24px]">All Tasks</li>
                    </Link>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Navbar