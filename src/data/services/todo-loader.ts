import { Todo } from "src/domain/entities";
import { ITodoLoader } from "src/domain/use-cases/todo-loader";
import { ICacheTodoRepository, ILoadTodoRepository } from "../contracts";

export class TodoLoaderService implements ITodoLoader {
  constructor(
    private readonly loadTodoRepository: ILoadTodoRepository,
    private readonly cacheTodoRepository: ICacheTodoRepository
  ){}
  async load (): Promise<Todo[]> {
    return this.loadTodoRepository.loadTodo()
  }
}