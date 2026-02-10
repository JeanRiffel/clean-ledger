import { CreateAccountUseCase } from "../../../application/uses-cases/account/create-account-use-case";

export class CreateAccountController {
  
  constructor(
    private readonly createAccountUseCase: CreateAccountUseCase
  ){}

  async handle(): Promise<any>{

    const result = await this.createAccountUseCase.execute()

    return {
      statusCode: 201,
      result: result
    }

  }


}