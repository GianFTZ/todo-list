import { MissingParam } from "../errors/misssing-param"

export const missingParam = (param: string) => {
  return {
    status: 400,
    body: new MissingParam(param)
  }
}