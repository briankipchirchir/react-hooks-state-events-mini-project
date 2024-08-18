// src/components/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import Task from './Task'; // Import the Task component
import { TASKS as INITIAL_TASKS, CATEGORIES } from '../data'; // Import constants with a different name

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS); // Use INITIAL_TASKS to avoid naming conflict
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = filteredCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === filteredCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks.map(task => (
          <Task
            key={task.id}
            text={task.text}
            category={task.category}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      />
    </div>
  );
}

export default App;

