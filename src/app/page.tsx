import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import { getPrismaTodos } from "./db/queries/todos";

export default async function Home() {
  const todos = await getPrismaTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateTodo />
      <Todos todos={todos} />
    </main>
  );
}
