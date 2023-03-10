export interface IDeleteTodoRepository {
  delete: (todoId: number) => Promise<number>
}