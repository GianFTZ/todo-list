import { ServerError } from "../../../../utils/errors/server-error";
import prisma from '../../../../utils/prisma/connection'
import type { Todo } from '@prisma/client'

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
  async createTodo(): Promise<Todo | Error> {
    try {
      let prismaResponse = await prisma.todo.create({
        data: {
          createAt: new Date(),
          deleteAt: new Date(),
          longDesc: 'valid_long_desc',
          shortDesc: 'valid_short_desc',
          title: 'valid_title',
          updateAt: new Date()
        }
      })
      return prismaResponse
    } catch (error) {
      return new ServerError(error)
    }
  }
}