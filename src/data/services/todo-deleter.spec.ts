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

  // test('should create todo with the correct values', async () => {
  //   const fakeData: TodoModel = { title: 'test', createAt: new Date, longDesc: 'valid_long_desc', shortDesc: 'valid_short_desc' ,deleteAt: new Date(), updateAt: new Date() }
  //   const { deleteTodoRepositoryMock: createTodoRepositoryMock } = mocks()
  //   const sut = new TodoCreateService(createTodoRepositoryMock)
  //   const response = await sut.create(fakeData)
  //   expect(response).toEqual(fakeData)
  // })
})