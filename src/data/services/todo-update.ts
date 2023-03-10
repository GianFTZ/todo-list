import { Todo } from "src/domain/entities/todo";
import { ITodoUpdate } from "src/domain/use-cases/todo-update";
import { UpdateDto } from "src/infra/adapters/sql/prisma/protocols/update";
import { ITodoUpdateRepository } from "../contracts/update-todo-repository";

export class TodoUpdateService implements ITodoUpdate {
  constructor(
    private readonly updateTodoRepository: ITodoUpdateRepository
  ){}
  async update(todoId: number, whatWillChange: UpdateDto): Promise<Todo | Error> {
    let entity = await this.updateTodoRepository.update(todoId, whatWillChange)
    return entity
  }
}