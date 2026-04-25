import { useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([
    { id: "1", name: "Work", color: "blue" },
    { id: "2", name: "Personal", color: "green" },
  ]);

  const addCategory = (name, color) => {
    setCategories(prev => [
      ...prev,
      { id: crypto.randomUUID(), name, color },
    ]);
  };

  return {
    categories,
    addCategory,
  };
};