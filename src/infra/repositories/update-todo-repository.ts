import { ITodoUpdateRepository } from "src/data/contracts/update-todo-repository";
import { Todo } from "src/domain/entities/todo";
import { Prisma } from "../adapters/sql/prisma/prisma";

export class TodoUpdateRepository implements ITodoUpdateRepository {
  async update(todoId: number): Promise<Todo> {
    const prisma = new Prisma()
    const response = await prisma.updateTodo(todoId)
  }
}