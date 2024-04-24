import React from 'react';
import deleted from '../../assets/delete.png';
import edit from '../../assets/edit.png';
import { Link } from 'react-router-dom';

const TaskItem = ({ item, onDelete, onEdit }) => {
  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(item.id); // Call the delete function with the task ID
    }
  };

  const handleEdit = () => {
    if (typeof onEdit === 'function') {
      onEdit(item); // Navigate to the edit page with the task data
    }
  };

  return (
    <div className='border rounded-md p-[2rem]'>
      <div className='flex justify-between border-b-[1px] pb-[1rem]'>
        <h1
          className='font-bold md:uppercase'
          style={{ color: item.priority === 'urgent' ? 'red' : 'green' }}
        >
          {item.priority}
        </h1>
        <div className='flex gap-[1rem]'>
          <button
            className='flex items-center md:gap-2 gap-1 border md:py-[.3rem] py-[.3rem] md:px-[1.5rem] px-[1rem] rounded-md bg-lime-500 border-lime-500 text-white'
            onClick={handleEdit}
          >
            <img src={edit} alt="edit" className='w-[1.2rem]' />
            <span>Edit</span>
          </button>
          <button
            className='flex items-center gap-1 border py-[.3rem] md:px-[1.5rem] px-[.5rem] rounded-md bg-rose-500 border-rose-500 text-white'
            onClick={handleDelete}
          >
            <img src={deleted} alt="delete" className='w-[1.6rem]' />
            <span>Delete</span>
          </button>
        </div>
      </div>
      <div>
        <h2 className='py-[1rem]'>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default TaskItem;
