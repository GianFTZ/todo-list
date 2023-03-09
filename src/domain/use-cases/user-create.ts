import { UserModel } from "src/data/models/user";
import { User } from "../entities";

export interface IUserCreater {
  create: (user: UserModel) => User;
}