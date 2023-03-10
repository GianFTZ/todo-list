import { IDeleteTodoRepository } from "../contracts/delete-todo-repository"
import { TodoDeleterService } from "./todo-deleter"

const mocks = () => {
  class DeleteTodoRepositoryMock implements IDeleteTodoRepository {
    async delete(todoId: number): Promise<number> {
      return new Promise<number>((resolve) => {
        resolve(todoId)
      })
    }
  }
  return {
    deleteTodoRepositoryMock: new DeleteTodoRepositoryMock()
  }
}


describe('todo deleter service', ()=> {
  test('should call delete todo repository', async () => {
    const fakeData: number = 1
    const { deleteTodoRepositoryMock } = mocks()
    const sut = new TodoDeleterService(deleteTodoRepositoryMock)
    const spy = jest.spyOn(deleteTodoRepositoryMock, 'delete')
    await sut.delete(fakeData)
    expect(spy).toHaveBeenCalled()
  })

  test('should delete todo with the correct values', async () => {
    const fakeData: number = 1
    const { deleteTodoRepositoryMock } = mocks()
    const sut = new TodoDeleterService(deleteTodoRepositoryMock)
    const response = await sut.delete(fakeData)
    expect(response).toEqual(fakeData)
  })
})