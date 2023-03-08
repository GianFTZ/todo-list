import { ICreateTodoRepository } from "src/data/contracts";
import { TodoModel } from "src/data/models/todo";
import { Prisma } from "../adapters/sql/prisma/prisma";

export class TodoCreateRepository implements ICreateTodoRepository {
  async create(todo: TodoModel): Promise<TodoModel | Error> {
    const prisma = new Prisma()
    const response = await prisma.createTodoStub(todo)
    return response
  }
}