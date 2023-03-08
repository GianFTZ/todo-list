import { Todo } from "../entities/todo";

export interface ITodoCreater {
  create: (todo: Todo) => Promise<Todo | Error>
}