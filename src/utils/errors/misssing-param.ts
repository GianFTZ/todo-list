export class MissingParam extends Error {
  constructor(property: String){
    super(`the follow property is missing: ${property}`)
    this.name = 'missing-param-error'
  }
}