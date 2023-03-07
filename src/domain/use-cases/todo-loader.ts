import { Todo } from "../entities/todo";

export interface ITodoLoader {
  load: () => Promise<Todo[]>
}