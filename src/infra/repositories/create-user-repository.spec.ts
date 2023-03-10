import { UserCreateDto } from "../adapters/sql/prisma/protocols/user-create-dto"
import { CreateUserRepository } from "./create-user-repository"

describe('create user repository', ()=> {
  test('should create with the right values', async () => {
    const fakeData: UserCreateDto = {
      username: 'valid_username',
      password: 'valid_password',
    }
    const sut = new CreateUserRepository()
    const response = await sut.create(fakeData)
    expect(response.name).toBe('valid_username')
  })

  test('should throw an error if one of required fields is missing', async () => {
    const fakeData = {
      username: 'valid_username',
    }
    const sut = new CreateUserRepository()
    // @ts-ignore
    const response = await sut.create(fakeData)
    expect(response instanceof Error).toBe(true)
  })
})