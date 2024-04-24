import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { getTask, editTasks } from '../../Service/taskApi';

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
  
    const { data: task, isLoading } = useQuery({
      queryKey: ['task', id],
      queryFn: () => getTask(id),
      enabled: !!id,
    });
  
    const { mutate: editTask } = useMutation({
      mutationFn: (updatedTask) => editTasks(updatedTask, id),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: ['task'] });
        queryClient.invalidateQueries(['task'])
        navigate('/AllTask');
      },
      onError: (err) => {
        console.error('Edit task error:', err);
      },
    });
  
    const onSubmit = (data) => {
      editTask(data); // Ensure that the correct data is submitted
    };
  
    useEffect(() => {
      if (task && task.length > 0) {
        const currentTask = task[0]; // Only proceed if there's a valid task
        setValue('title', currentTask.title);
        setValue('description', currentTask.description);
        setValue('priority', currentTask.priority);
      }
    }, [task, setValue]);
  
    if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-[2rem] grid gap-[2rem] md:px-[5rem] px-[1.2rem] w-full'>
        <div>
            <h1 className='text-[47px] font-semibold'>Edit Task</h1>
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
    </div>
  );
};

export default EditTask;
