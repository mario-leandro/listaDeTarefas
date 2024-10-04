import checkIcon from "../assets/check.svg";
import closeIcon from "../assets/close.svg";

interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface TasksAreaProps {
  task: Task;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
}

export default function TasksArea({ task, removeTask, completeTask }: TasksAreaProps) {
  return (
    <div className="tasks-area">
      <div className="task-card">
        <div
          className="task-name"
          style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
        >
          <p>{task.name}</p>
        </div>

        <div className="task-btns">
          <button className="complete-btn complete" onClick={() => completeTask(task.id)}>
            <img src={checkIcon} alt="check icon" />
          </button>

          <button className="delete-btn remove" onClick={() => removeTask(task.id)}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
