import { Http } from "./http";

export interface IController {
  handle: (req: Http.Request) => Promise<Http.Response>
}