import { TodoModel } from "../models/todo";

export interface ITodoUpdateRepository {
  update: (todoId: number) => Promise<TodoModel>
}