import { UserCreateDto } from "src/infra/adapters/sql/prisma/protocols/user-create-dto";
import { UserModel } from "../models/user";

export interface IUserCreaterRepository {
  create: (user: UserCreateDto) => Promise<UserModel | Error>
}