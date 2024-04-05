import { Todo } from "@prisma/client";

export default function Todos({ todos }: { todos: Todo[] }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Assignee
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr
                key={todo.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {todo.title}
                </th>
                <td className="px-6 py-4">{todo.assignee}</td>
                <td className="px-6 py-4">{todo.status ? "✔️" : "❌"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
