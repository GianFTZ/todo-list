import { UpdateDto } from "src/infra/adapters/sql/prisma/protocols/update";
import { TodoModel } from "../models/todo";

export interface ITodoUpdateRepository {
  update: (todoId: number, data: UpdateDto) => Promise<TodoModel | Error>
}