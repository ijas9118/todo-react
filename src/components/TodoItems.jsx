import React from 'react'
import tick from '../assets/tick.svg';
import cross from '../assets/cross.svg';
import delete_icon from '../assets/delete.svg';

const TodoItems = () => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={tick} alt="" className='w-7'/>
        <p className='text-slate-700 ml-4 text-[17px]'>Learn React JS</p>
      </div>

      <img src={delete_icon} alt="" className='w-6 cursor-pointer'/>
    </div>
  )
}

export default TodoItems