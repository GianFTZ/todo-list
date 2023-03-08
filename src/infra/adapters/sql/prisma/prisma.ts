import { ServerError } from "../../../../utils/errors/server-error";
import prisma from '../../../../utils/prisma/connection'
import type { Todo } from '@prisma/client'
import { TodoModel } from "src/data/models/todo";

export class Prisma {
  async loadAllTodo(): Promise<Todo[] | Error> {
    try {
      let prismaResponse = await prisma.todo.findMany({
        select: {
          id: true,
          title: true,
          longDesc: true,
          shortDesc: true,
          createAt: true,
          updateAt: true,
          deleteAt: true
        }
      })
      return prismaResponse
    } catch (error) {
      return new ServerError(error)
    }
  }
  async createTodo(todo: TodoModel): Promise<Todo | Error> {
    try {
      let prismaResponse = await prisma.todo.create({
        data: todo
      })
      return prismaResponse
    } catch (error) {
      return new ServerError(error)
    }
  }
  async createTodoStub(todo: TodoModel): Promise<Todo | Error> {
    try {
      let prismaRepoMock = []
      prismaRepoMock.push(todo)
      let response = prismaRepoMock[0]
      prismaRepoMock = []
      return response
    } catch(error) {
      return new ServerError(error)
    }
  }
}