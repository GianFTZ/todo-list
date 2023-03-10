import { UserCreateDto } from "src/infra/adapters/sql/prisma/protocols/user-create-dto"
import { SignupController } from "./signup-controller"
import { IUserCreaterRepository } from "src/data/contracts/create-user-repository";
import { UserModel } from "src/data/models/user";


const makeMock = () => {
  class CreateUserRepositoryMock implements IUserCreaterRepository {
    async create(user: UserCreateDto): Promise<UserModel | Error> {
      return {
        name: user.name
      }
    }
  }
  return {
    createUserRepository: new CreateUserRepositoryMock()
  }
}

const makeSut = () => {
  const { createUserRepository } = makeMock()
  const sut = new SignupController(createUserRepository)
  return {
    sut,
    createUserRepository
  }
}

describe('signup controller', () => {
  test('should call signup controller with correct values', async () => {
    const fakeData = {
      body: {
        username: 'valid_username',
        name: 'valid_name',
        password: 'valid_password'
      }
    }
    const { sut } = makeSut()
    const spy = jest.spyOn(sut, 'handle')
    await sut.handle(fakeData)
    expect(spy).toHaveBeenLastCalledWith(fakeData)
  })
  test('should return 400 if no password is provided', async () => {
    const fakeData = {
      body: {
        username: 'valid_username',
        name: 'valid_name',
      }
    }
    const { sut } = makeSut()
    const response = await sut.handle(fakeData)
    expect(response.status).toBe(400)
  })
  test('should return 400 if no username is provided', async () => {
    const fakeData = {
      body: {
        password: 'valid_password',
        name: 'valid_name',
      }
    }
    const { sut } = makeSut()
    const response = await sut.handle(fakeData)
    expect(response.status).toBe(400)
  })
  test('should return 400 if no name is provided', async () => {
    const fakeData = {
      body: {
        username: 'valid_username',
        password: 'valid_password',
      }
    }
    const { sut } = makeSut()
    const response = await sut.handle(fakeData)
    expect(response.status).toBe(400)
  })

  test('should return 400 if no name is provided', async () => {
    const fakeData = {
      body: {
        username: 'valid_username',
        password: 'valid_password',
      }
    }
    const { sut } = makeSut()
    const response = await sut.handle(fakeData)
    expect(response.status).toBe(400)
  })

  test('should call repository with correct values', async () => {
    const fakeData = {
      body: {
        name: 'valid_name',
        username: 'valid_username',
        password: 'valid_password',
      }
    }
    const { sut, createUserRepository } = makeSut()
    const spy = jest.spyOn(createUserRepository, 'create')
    await sut.handle(fakeData)
    expect(spy).toHaveBeenCalledWith(fakeData.body)
  })

  test('should return name if everything is okay by creating new user.', async () => {
    const fakeData = {  
      body: {
        name: 'valid_name',
        username: 'valid_username',
        password: 'valid_password',
      }
    }
    const { sut } = makeSut()
    const response = await sut.handle(fakeData)
    expect(response.body.name).toBe(fakeData.body.name)
  })

  test('should return 200 if everything is okay by creating new user.', async () => {
    const fakeData = {  
      body: {
        name: 'valid_name',
        username: 'valid_username',
        password: 'valid_password',
      }
    }
    const { sut } = makeSut()
    const response = await sut.handle(fakeData)
    expect(response.status).toBe(200)
  })
})