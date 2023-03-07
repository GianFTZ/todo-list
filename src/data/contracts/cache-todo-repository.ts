import { TodoModel } from "../models/todo";

export interface ICacheTodoRepository {
  cache: () => Promise<TodoModel[]>
}