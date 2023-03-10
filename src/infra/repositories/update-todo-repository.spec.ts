import { Todo } from "@prisma/client"
import { TodoUpdateRepository } from "./update-todo-repository"

describe('update todo repository', ()=> {
  test('should call orm with correct values', async () => {
    const sut = new TodoUpdateRepository()
    const response = await sut.update(1, { title: 'updated' })
    expect((response as Todo).title).toBe('updated')
  })
})  