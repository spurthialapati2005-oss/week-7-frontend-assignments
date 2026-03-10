import React from 'react'

function TaskList({tasks}) {
    if(tasks.length == 0){
        return <p className='text-3xl text-red-400' >Empty</p>
    }
  return (
    <div>
        <h3 className='text-4xl text-amber-400'>List of Tasks</h3>
            {tasks.map((taskobj,index)=> (
                <p className='text-2xl' key={index}>
                {taskobj.taskName}
                </p>
            ))}
    </div>
  );
}

export default TaskList

