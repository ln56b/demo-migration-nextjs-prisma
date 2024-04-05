"use client";
import { Todo } from "@prisma/client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTodo() {
  const initialFormState = {
    id: 0,
    title: "",
    assignee: "",
    status: false,
  };
  const [todo, setTodo] = useState(initialFormState);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.title || !todo.assignee) return;

    await fetch("/db/queries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    router.refresh();

    setTodo(initialFormState);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <label
          htmlFor="assignee"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Assignee
        </label>
        <input
          type="text"
          name="assignee"
          id="assignee"
          value={todo.assignee}
          onChange={(e) => setTodo({ ...todo, assignee: e.target.value })}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded  w-full sm:w-auto"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
