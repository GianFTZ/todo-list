import { IDeleteTodoRepository } from "src/data/contracts/delete-todo-repository";
import { Prisma } from "../adapters/sql/prisma/prisma";

export class TodoDeleteRepository implements IDeleteTodoRepository {
  async delete(todoId: number): Promise<number> {
    const prisma = new Prisma()
    const response = await prisma.deleteTodoStub(todoId)
    if (response instanceof Error) {
      throw new Error(response.message)
    }
    return response
  }
}