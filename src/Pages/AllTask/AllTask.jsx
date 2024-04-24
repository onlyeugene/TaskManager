import React from 'react';
import useTasks from '../../Components/useTask'; // Ensure the correct import path
import TaskItem from '../../Components/TaskItem/TaskItem';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTasks } from '../../Service/taskApi';

const AllTask = () => {
    const { isLoading, task } = useTasks();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
  
    // Use the mutation to delete a task
    const { mutate: deleteTask } = useMutation({
      mutationFn: (id) => deleteTasks(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['task'] }); // Refresh the task list
      },
      onError: (err) => {
        console.error('Delete task error:', err);
      },
    });
  
    // Corrected handleDelete to use the mutation
    const handleDelete = (id) => {
      deleteTask(id); // Use the mutation to delete the task and trigger cache invalidation
    };
  
    const handleEdit = (item) => {
      navigate(`/EditTask/${item.id}`); // Navigate to the edit form
    };

  if (isLoading) {
    return <div className='text-center py-[1rem] text-[18px] font-medium'>Loading tasks...</div>;
  }

  if (!task.length) {
    return <div>No tasks found</div>;
  }

  return (
    <div className='py-[2rem] grid gap-[2rem] px-[1rem] md:px-[5rem] w-full'>
      <div className='flex justify-between items-center px-[1rem]'>
        <h1 className='md:text-[47px] text-[28px] font-semibold'>My Tasks</h1>
        <p
          className='text-purple-700 font-bold text-[14px] md:text-[20px]'
          onClick={() => navigate('/NewTask')}
        >
          + Add New Task
        </p>
      </div>
      <ul className='pt-[1rem] grid gap-[2rem]'>
        {task.map((item) => (
          <TaskItem
            item={item}
            key={item.id}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </ul>
      <a href="#top" className='text-center font-semibold text-[18px] underline text-blue-300'> Back to top</a>
    </div>
  );
};

export default AllTask;
