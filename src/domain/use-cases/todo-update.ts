import { Todo } from "../entities/todo";

export interface ITodoUpdate {
  update: (todoId: number) => Promise<Todo>
}