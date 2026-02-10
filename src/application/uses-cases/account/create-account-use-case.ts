import { Account } from "../../../domain/entities/account"
import { AccountStatus } from "../../../domain/value-objects/account-status-value-object"

export class CreateAccountUseCase {

  constructor(){}

  async execute(): Promise<boolean>{
    const accountStatus = new AccountStatus(1)

    const account = new Account(
      1,
      accountStatus,
      new Date()
    )
    
    return account.isValid()
  }

}