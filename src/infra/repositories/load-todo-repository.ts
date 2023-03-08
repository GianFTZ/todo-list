import { ILoadTodoRepository } from "src/data/contracts/load-todo-repository";
import { TodoModel } from "src/data/models/todo";
import { Prisma } from "../adapters/sql/prisma/prisma";

export class TodoLoaderRepository implements ILoadTodoRepository {
  async loadTodo(): Promise<TodoModel[]> {
    const prisma = new Prisma()
    const response = await prisma.loadAllTodo()
    return new Promise<TodoModel[]>((resolve) => {
      resolve(response as TodoModel[])
    })
  }
}