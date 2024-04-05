import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import { getPrismaTodos } from "./db/queries/todos";

export default async function Home() {
  const todos = await getPrismaTodos();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold pb-10">TODO App V1</h1>
      <div className="flex flex-col justify-between">
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </main>
  );
}
