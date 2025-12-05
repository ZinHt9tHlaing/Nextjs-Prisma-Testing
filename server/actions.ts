"use server";

import prisma from "@/lib/prisma";

export const readData = async () => {
  const todos = await prisma.todo.findMany();

  if (!todos) {
    return { error: "No todos found!" };
  }

  return { success: todos };
};
