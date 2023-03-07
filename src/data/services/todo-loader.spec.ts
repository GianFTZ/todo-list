import { ILoadTodoRepository, ICacheTodoRepository } from "../contracts"
import { TodoModel } from "../models/todo"
import { TodoLoaderService } from "./todo-loader"

const mocks = () => {
  class LoadTodoRepositoryMock implements ILoadTodoRepository {
    async loadTodo(): Promise<TodoModel[]> {
      return new Promise<TodoModel[]>((resolve) => {
        resolve([{ title: 'test', createAt: new Date, longDesc: 'valid_long_desc', shortDesc: 'valid_short_desc' ,deleteAt: new Date(), updateAt: new Date() }])
      })
    }
  }
  class CacheTodoRepositoryMock implements ICacheTodoRepository {
    async cache (): Promise<TodoModel[] | null> {
      return new Promise<TodoModel[]>((resolve) => {
        resolve([{ title: 'cache_test', createAt: new Date, longDesc: 'valid_long_desc', shortDesc: 'valid_short_desc' ,deleteAt: new Date(), updateAt: new Date() }])
      })
    }
  }
  return {
    loadTodoRepository: new LoadTodoRepositoryMock(),
    cacheTodoRepository: new CacheTodoRepositoryMock()
  }
}

describe('todo loader service', ()=> {
  test('should return cache if it had', async () => {
    const { cacheTodoRepository, loadTodoRepository } = mocks()
    const sut = new TodoLoaderService(loadTodoRepository, cacheTodoRepository)
    const response = await sut.load()
    expect(response[0].title).toBe('cache_test')
  })
  test('should not return cache if dont have a cache', async () => {
    const { cacheTodoRepository, loadTodoRepository } = mocks()
    const sut = new TodoLoaderService(loadTodoRepository, cacheTodoRepository)
    jest.spyOn(cacheTodoRepository, 'cache').mockResolvedValue(null)
    const response = await sut.load()
    expect(response[0].title).toBe('test')
  })
})