import { UserModel } from "../models/user";

export interface UserCreaterRepository {
  create: (user: UserModel) => UserModel
}