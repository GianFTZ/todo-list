import { ServerError } from "../../../../utils/errors/server-error";
import prisma from '../../../../utils/prisma/connection'
import type { Todo, User } from '@prisma/client'
import { TodoModel } from "src/data/models/todo";
import { UpdateDto } from "./protocols/update";
import { UserCreateDto } from "./protocols/user-create-dto";
// import { UpdateDto } from "./protocols/update";

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
      return prismaResponse as Todo[]
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
  async deleteTodo(todoId: number): Promise<Todo | Error> {
    try {
      return prisma.todo.delete({
        where: {
          id: todoId
        }
      })
    } catch (error) {
      return new ServerError(error)
    }
  }
  async deleteTodoStub(todoId: number): Promise<number | Error> {
    try {
      return todoId
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
  async updateTodo(todoId: number, data: UpdateDto): Promise<Todo | Error> {
    try {
      return prisma.todo.update({
        where: {
          id: todoId
        },
        data: data
      })
    } catch (error) {
      return new ServerError(error)
    }
  }
  async createUser(user: UserCreateDto): Promise<User> {
    const response = await prisma.user.create({
      data: user
    })
    return {
      id: response.id,
      password: response.password,
      username: response.username
    }
  }
}