import type { Todo } from "@prisma/client";
import { db } from "../index";

export async function getPrismaTodos(): Promise<Todo[]> {
  return db.todo.findMany();
}
