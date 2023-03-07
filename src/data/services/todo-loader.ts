import { Todo } from "src/domain/entities";
import { ITodoLoader } from "src/domain/use-cases/todo-loader";
import { ICacheTodoRepository } from "../contracts/cache-todo-repository";
import { ILoadTodoRepository } from "../contracts/load-todo-repository";

export class TodoLoaderService implements ITodoLoader {
  constructor(
    private readonly loadTodoRepository: ILoadTodoRepository,
    private readonly cacheTodoRepository: ICacheTodoRepository
  ){}
  async load (): Promise<Todo[]> {
    return this.loadTodoRepository.loadTodo()
  }
}