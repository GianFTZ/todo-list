import { Todo } from "src/domain/entities/todo";
import { ITodoCreater } from "src/domain/use-cases/todo-create";
import { ICreateTodoRepository } from "../contracts/create-todo-repository";

export class TodoCreateService implements ITodoCreater {
  constructor(private readonly createTodoRepository: ICreateTodoRepository){}

  async create(todo: Todo): Promise<Todo | Error>{
    return this.createTodoRepository.create(todo)
  }
}