import { useState } from "react";
import "./styles/styles.sass";
import CreateTask from "./components/createTask";
import TasksArea from "./components/tasksArea";

interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="container">
      <div className="content">
        <div className="todoList">
          <div className="top">
            <div className="title">
              <h1>Todo List</h1>
            </div>

            <CreateTask addTask={addTask} />
          </div>

          <div className="bottom">
            {tasks.map(task => (
              <TasksArea
                key={task.id}
                task={task}
                removeTask={removeTask}
                completeTask={completeTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
