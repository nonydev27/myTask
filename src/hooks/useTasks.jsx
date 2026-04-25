import { useEffect, useMemo, useState } from "react";
import { getTasks, saveTasks } from "../services/taskService";
import { PRIORITY } from "../types/task";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | completed | pending

  // Load tasks on mount
  useEffect(() => {
    const stored = getTasks();
    setTasks(stored);
  }, []);

  // Save whenever tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add task
  const addTask = (title, priority = PRIORITY.LOW) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };

    setTasks(prev => [newTask, ...prev]);
  };

  // Toggle task
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Update task
  const updateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // Filter + search logic
  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
      })
      .filter(task =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
  }, [tasks, filter, search]);

  return {
    tasks: filteredTasks,
    rawTasks: tasks,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    search,
    setSearch,
    filter,
    setFilter,
  };
};