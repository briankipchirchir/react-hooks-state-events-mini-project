import Task from "./Task";
function TaskList({ tasks,handleDeleteTask }) {
  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id} // Ensure `task.id` is unique
          text={task.text}
          category={task.category}
          onDelete={() => handleDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}
export default TaskList;