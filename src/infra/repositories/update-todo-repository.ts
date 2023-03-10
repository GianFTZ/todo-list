import { ITodoUpdateRepository } from "src/data/contracts/update-todo-repository";
import { Todo } from "src/domain/entities/todo";
import { Prisma } from "../adapters/sql/prisma/prisma";
import { UpdateDto } from "../adapters/sql/prisma/protocols/update";

export class TodoUpdateRepository implements ITodoUpdateRepository {
  async update(todoId: number, whatWillChange: UpdateDto): Promise<Todo | Error> {
    const prisma = new Prisma()
    const response = await prisma.updateTodo(todoId, whatWillChange)
    return response
  } 
}