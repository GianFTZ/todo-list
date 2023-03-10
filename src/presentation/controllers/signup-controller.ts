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
    return {
      body: req,
      status: 200
    }
  }
}