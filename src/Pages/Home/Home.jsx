import React from 'react'
import taskimage from '../../assets/taskImage.png'
import AllTask from '../AllTask/AllTask'

const Home = () => {
  return (
    <div className='py-[2rem] md:px-[10rem] px-[2rem] w-full xl:flex justify-center items-center gap-[10rem]'>
        <div className='grid gap-[1rem]'>
            <h1 className='text-[45px] font-medium'>Manage your Tasks on <span className='text-purple-700'>TaskDuty</span></h1>
            <p className='text-[18px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est, ratione, temporibus facere eos reprehenderit debitis quisquam delectus perferendis nemo soluta suscipit sint exercitationem optio esse ullam tempora fuga velit!</p>
            <div>
                <button className='border bg-purple-700 border-purple-700 rounded-md text-white py-[.5rem] px-[2rem] text-[18px]'>Go To My Tasks</button>
            </div>
        </div>

        <div>
            <img src={taskimage} alt="" className='w-[80rem]'/>
        </div>
        {/* <AllTask/> */}
    </div>
  )
}

export default Home