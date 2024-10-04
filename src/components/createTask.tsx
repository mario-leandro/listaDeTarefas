import { useState, FormEvent, ChangeEvent } from "react";

interface CreateTaskProps {
  addTask: (taskName: string) => void;
}

export default function CreateTask({ addTask }: CreateTaskProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputValue) return;
    addTask(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="create-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Create</button>
    </form>
  );
}
