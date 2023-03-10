import { User } from "src/domain/entities/user";
import { IUserCreater } from "src/domain/use-cases/user-create";
import { IUserCreaterRepository } from "../contracts/create-user-repository";
import { UserModel } from "../models/user";

export class UserCreaterService implements IUserCreater {
  constructor(private readonly userCreateRepository: IUserCreaterRepository){}
  create(user: UserModel): User {
    const repoResponse = this.userCreateRepository.create(user)
    return {
      name: repoResponse.name
    }
  } 
}