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
})