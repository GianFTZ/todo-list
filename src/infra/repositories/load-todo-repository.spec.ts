import { TodoLoaderRepository } from "./load-todo-repository"

describe('todo-repository', ()=> {
  test('connect test', async () => {
    const sut = new TodoLoaderRepository()
    const response = await sut.loadTodo()
    expect(response).toHaveLength(2)
  })
})