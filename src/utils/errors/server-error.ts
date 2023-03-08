export class ServerError extends Error {
  constructor(error: Error){
    super(`unexpected server error ${error}`)
    this.name = 'server-error'
  }
}