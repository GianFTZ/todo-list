import { SignupController } from "./signup-controller"

const makeSut = () => {
  const sut = new SignupController()
  return {
    sut
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
})