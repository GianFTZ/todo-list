import { Todo } from "../entities/todo";

export interface ITodoLoader {
  create: (todo: Todo) => Promise<Todo>
}