import React from 'react'

function TaskCount({tasks}) {
    console.log(tasks)
  return (
    <div>
        <h3 className='text-4xl text-amber-400'>Task Count</h3>
        <p className='text-3xl'>{tasks.length}</p>
    </div>

  )
}

export default TaskCount