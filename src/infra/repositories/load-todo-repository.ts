import { ILoadTodoRepository } from "src/data/contracts/load-todo-repository";
import { TodoModel } from "src/data/models/todo";

export class TodoLoaderRepository implements ILoadTodoRepository {
  async loadTodo(): Promise<TodoModel[]> {
    
  }
}