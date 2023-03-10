import { Todo } from "../entities/todo";

export interface ITodoUpdate {
  update: (todoId: number, dto: any[]) => Promise<Todo | Error>
}