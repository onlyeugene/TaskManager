import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createTasks } from '../../Service/taskApi';
import { useNavigate } from 'react-router-dom';

const NewTask = () => {
    // const [selectedPriority, setSelectedPriority] = useState(null);
    // const [showPriorityOptions, setShowPriorityOptions] = useState(false);
    
  
    // const handlePriorityClick = (priority) => {
    //     setSelectedPriority(priority);
    //     setShowPriorityOptions(false); // Hide priority options after selection
    //   };
    
    //   // Function to toggle display of priority options
    //   const togglePriorityOptions = () => {
    //     setShowPriorityOptions(!showPriorityOptions);
    //   };

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate:createTask}=useMutation({
        mutationFn:createTasks,
        onSuccess:()=>{
            //   toast.success("new task sucesfully created")
            queryClient.invalidateQueries({querykey:["task"]})
              reset()
            
            navigate("/Alltask")
        },
        // onError:(err)=>toast.error(err.message)
    })


    const {register,reset, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = (data) => {
        createTask(data)
    
    }
    return (
    <div className='py-[2rem] grid gap-[2rem] md:px-[5rem] px-[1.2rem] w-full'>
        <div>
            <h1 className='text-[47px] font-semibold'>New Task</h1>
        </div>
        <form className='w-full grid gap-[2rem]' onSubmit={handleSubmit(onSubmit)}>
            <div className='relative' id='textInput'>
                <input className='border pt-[1.2rem] pb-[.5rem] px-[1rem] rounded-md w-full' 
                type="text"
                id='title'
                 placeholder='E.g. Project Defense, Assignment....'
                 {...register("title", { required: true, maxLength: 20 })}
                 aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title?.type === "required" && (
                    <p className='font-medium pt-2 text-[18px] text-red-500' role="alert">Title is required</p>
                )}
                <label className=' md
                md:text-[20px]  absolute bg-white -top-6 left-6 p-[.6rem] text-[#9c9c9c] font-semibold' htmlFor="text">Task Title</label>
            </div>
            <div className='relative'>
                <input className='border pt-[2rem] pb-[10rem] px-[1rem] rounded-md w-full' 
                type="text"
                id='description'
                 placeholder='Briefly describe your task ...'
                 {...register("description", { required: true })}
                 aria-invalid={errors.description ? "true" : "false"}
                />
                {errors.description?.type === "required" && (
                    <p className='font-medium pt-2 text-[18px] text-red-500' role="alert">Description is required</p>
                )}
                <label className=' md
                md:text-[20px] absolute bg-white -top-6 left-6 p-[.6rem] text-[#9c9c9c] font-semibold' htmlFor="text">Description</label>
            </div>

            {/* <div className='grid justify-center text-center uppercase font-semibold text-[18px]' onClick={togglePriorityOptions}>
                <p>{selectedPriority ? selectedPriority : 'Pick a Priority'}</p>
                <div className='' {...register("priority")} id='priority'>
                {showPriorityOptions && (
                    <div>
                        <p  onClick={() => handlePriorityClick('URGENT')}>URGENT</p>
                        <p  onClick={() => handlePriorityClick('IMPORTANT')}>IMPORTANT</p>
                    </div>
                )}
                </div>
            </div> */}

            <div className=' w-full grid justify-center items-center'>
                <label className="text-center font-bold uppercase pb-3 text-[20px]">Select Priority</label>
                <select className='rounded-md font-semibold outline border-black text-[18px]  py-2 px-[1rem]' id="priority" {...register("priority",{ required: true })} 
                aria-invalid={errors.priority ? "true" : "false"}
                >
                    <option value="urgent">URGENT</option>
                    <option value="important">IMPORTANT</option>
                </select>
                {errors.priority?.type === "required" && (
                    <p className='font-medium pt-2 text-[18px] text-red-500' role="alert">Select a priority</p>
                )}
            </div>
            
            <div className=''>
                <button className='border py-[1rem] bg-purple-700 border-purple-700 text-white px-[1rem] rounded-md w-full'>Done</button>
            </div>
        </form>
        <a href="#top"  className='text-center font-semibold text-[18px] underline text-blue-300'>Back to top</a>
    </div>
  )
}

export default NewTask