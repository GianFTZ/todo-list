import { IController } from "./contracts/controller";
import { Http } from "./contracts/http";


/**
 * @required
 * username
 * name
 * password
 */

export class SignupController implements IController {
  async handle(req: Http.Request): Promise<Http.Response> {
    const requiredFields = ["username", "name", "password"]
    for(const fields of requiredFields){
      if(!req.body[fields]){
        return {
          body: 'missing properties',
          status: 400
        }
      }
    }
    return {
      body: req,
      status: 200
    }
  }
}