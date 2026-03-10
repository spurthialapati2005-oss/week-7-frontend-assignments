import { useForm } from "react-hook-form";

function Addtask({ addNewTask }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (taskObj) => {
    addNewTask(taskObj);
    reset();
  };

  return (
    <div>
      <h3 className="text-4xl text-amber-400 mb-4">Add Task</h3>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Task Input */}
        <div className="mb-3">

          <input
            type="text"
            placeholder="Task Name"
            autoFocus
            className="border p-2 rounded w-full"
            {...register("taskName", {
              required: "Task name is required",
              minLength: {
                value: 3,
                message: "Task must be at least 3 characters"
              },
              validate: (value) =>
                value.trim() !== "" || "Task cannot be empty spaces"
            })}
          />

          {/* Error Message */}
          {errors.taskName && (
            <p className="text-red-500 mt-1">
              {errors.taskName.message}
            </p>
          )}

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className="bg-blue-700 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Add Task
        </button>

      </form>
    </div>
  );
}

export default Addtask;