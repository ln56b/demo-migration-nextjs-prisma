import type { Todo } from "@prisma/client";
import { db } from "../index";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function addPrismaTodo(todo: Todo): Promise<Todo> {
  return db.todo.create({ data: todo });
}

// Action to create
export const POST = async (req: NextRequest) => {
  const { title, assignee, status } = await req.json();

  const post = await prisma.todo.create({
    data: {
      title,
      assignee,
      status,
    },
  });

  return NextResponse.json({
    post,
  });
};
