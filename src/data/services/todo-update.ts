import { Todo } from "src/domain/entities/todo";
import { ITodoUpdate } from "src/domain/use-cases/todo-update";
import { ITodoUpdateRepository } from "../contracts/update-todo-repository";

export class TodoUpdateService implements ITodoUpdate {
  constructor(
    private readonly updateTodoRepository: ITodoUpdateRepository
  ){}
  async update(todoId: number): Promise<Todo> {
    let entity = this.updateTodoRepository.update(todoId)
    return new Promise<Todo>((resolve) => {
      resolve(entity)
    })
  }
}