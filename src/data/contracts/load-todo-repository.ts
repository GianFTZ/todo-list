import { TodoModel } from "../models/todo";

export interface ILoadTodoRepository {
  loadTodo: () => Promise<TodoModel[]>  
}