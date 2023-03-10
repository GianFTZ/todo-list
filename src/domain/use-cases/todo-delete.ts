import { Todo } from "../entities/todo";

export interface ITodoDeleter {
  delete: (todoId: number) => Promise<number>
}