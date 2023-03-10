import { ServerError } from "../../utils/errors/server-error";
import { IUserCreaterRepository } from "src/data/contracts/create-user-repository";
import { UserModel } from "src/data/models/user";
import { Prisma } from "../adapters/sql/prisma/prisma";
import { UserCreateDto } from "../adapters/sql/prisma/protocols/user-create-dto";

export class CreateUserRepository implements IUserCreaterRepository {
  async create (user: UserCreateDto): Promise<UserModel | Error> {
    try {
      const prisma = new Prisma()
      const response = await prisma.createUser(user)
      return {
        name: response.username
      }
    } catch (error) {
      return new ServerError(error)
    }
  }
}