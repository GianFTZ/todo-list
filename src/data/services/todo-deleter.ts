import { ITodoDeleter } from "src/domain/use-cases/todo-delete";
import { IDeleteTodoRepository } from "../contracts/delete-todo-repository";

export class TodoDeleterService implements ITodoDeleter {
  constructor(private readonly deleteTodoRepository: IDeleteTodoRepository){}

  async delete(todoId: number): Promise<number>{
    return this.deleteTodoRepository.delete(todoId)
  }
}