export interface ITodoDeleter {
  delete: (todoId: number) => Promise<number>
}