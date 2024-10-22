import React from 'react'
import tick from '../assets/tick.svg';
import noTick from '../assets/no-tick.svg';
import delete_icon from '../assets/delete.svg';

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : noTick} alt="" className='w-6'/>
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <img src={delete_icon} alt="" className='w-5 cursor-pointer' onClick={() => deleteTodo(id)}/>
    </div>
  )
}

export default TodoItems