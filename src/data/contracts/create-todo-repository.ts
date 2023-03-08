import { TodoModel } from "../models/todo";

export interface ICreateTodoRepository {
  create: (todo: TodoModel) => Promise<TodoModel>
}