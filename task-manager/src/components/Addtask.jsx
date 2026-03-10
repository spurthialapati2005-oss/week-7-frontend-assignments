import {useForm} from 'react-hook-form'

function Addtask({addNewTask}) {
    const {register, handleSubmit, reset}= useForm();

    const onSubmit=(taskobj) => {
        addNewTask(taskobj);
        reset()
    }
  return (

    <div>
        <h3 className='text-4xl text-amber-400'>Add task</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <input type="text" {...register("taskName")} placeholder='Task Name' />
            </div>
            <div>
                <button type="submit" className='bg-blue-700 text-lime-100 px-3 py-2'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default Addtask