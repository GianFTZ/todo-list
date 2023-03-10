import { CreateUserRepository } from "src/infra/repositories/create-user-repository";
import { missingParam } from "../../utils/helpers/missing-param-helper"
import { IController } from "./contracts/controller";
import { Http } from "./contracts/http";

/**
 * @required
 * username
 * name
 * password
 */
export class SignupController implements IController {
  constructor(private signupRepository: CreateUserRepository){}
  async handle(req: Http.Request): Promise<Http.Response> {
    const requiredFields = ["username", "name", "password"]
    for(const field of requiredFields){
      if(!req.body[field]){
        return missingParam(field)
      }
    }
    const response = await this.signupRepository.create(req.body)
    return {
      body: response,
      status: 200
    }
  }
}