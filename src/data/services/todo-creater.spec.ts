import { ICreateTodoRepository } from "../contracts/create-todo-repository"
import { TodoModel } from "../models/todo"
import { TodoCreateService } from "./todo-create"

const mocks = () => {
  class CreateTodoRepositoryMock implements ICreateTodoRepository {
    async create(todo: TodoModel): Promise<TodoModel> {
      return new Promise<TodoModel>((resolve) => {
        resolve(todo)
      })
    }
  }
  return {
    createTodoRepositoryMock: new CreateTodoRepositoryMock()
  }
}


describe('todo create service', ()=> {
  test('should call create todo repository', async () => {
    const fakeData: TodoModel = { title: 'test', createAt: new Date, longDesc: 'valid_long_desc', shortDesc: 'valid_short_desc' ,deleteAt: new Date(), updateAt: new Date() }
    const { createTodoRepositoryMock } = mocks()
    const sut = new TodoCreateService(createTodoRepositoryMock)
    const spy = jest.spyOn(createTodoRepositoryMock, 'create')
    await sut.create(fakeData)
    expect(spy).toHaveBeenCalled()
  })

  test('should create todo with the correct values', async () => {
    const fakeData: TodoModel = { title: 'test', createAt: new Date, longDesc: 'valid_long_desc', shortDesc: 'valid_short_desc' ,deleteAt: new Date(), updateAt: new Date() }
    const { createTodoRepositoryMock } = mocks()
    const sut = new TodoCreateService(createTodoRepositoryMock)
    const response = await sut.create(fakeData)
    expect(response).toEqual(fakeData)
  })
})